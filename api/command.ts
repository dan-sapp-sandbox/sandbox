export const runtime = "edge";

type Tool = {
  name: string;
  description: string;
  parameters: Record<string, string>;
};

type CommandRequest = {
  prompt: string;
  tools: Tool[];
};

type CommandResponse = {
  action: string | null;
  args: Record<string, any>;
};

export async function POST(req: Request) {
  const { prompt, tools }: CommandRequest = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return new Response("Missing OPENAI_API_KEY", { status: 500 });
  }

  // Build readable tool context for the model
  const toolDescriptions = tools
    .map((t) => {
      return `
        Name: ${t.name}
        Description: ${t.description}
        Parameters: ${JSON.stringify(t.parameters)}
      `.trim();
    })
    .join("\n\n");

  const systemPrompt = `
    You are an AI command router.

    Your job is to convert user input into a structured function call.

    AVAILABLE TOOLS:
    ${toolDescriptions}

    RULES:
    - Choose exactly ONE tool name from the list
    - If none match, return action: null
    - Output ONLY valid JSON
    - No explanation, no markdown

    OUTPUT FORMAT:
    {
      "action": string | null,
      "args": object
    }
  `;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: {
        type: "json_object",
      },
    }),
  });

  const data = await response.json();

  const text = data.output?.[0]?.content?.[0]?.text ?? "{}";

  let parsed: CommandResponse;

  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = {
      action: null,
      args: {},
    };
  }

  return new Response(JSON.stringify(parsed), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
