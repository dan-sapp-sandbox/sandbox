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
          content: `
You are a command router.

Pick the best matching tool from the list.
Only return a valid structured response.
If user intent matches a tool, you MUST select it.
          `.trim(),
        },
        {
          role: "user",
          content: `
User request:
${prompt}

Tools:
${tools
  .map((t) =>
    `
${t.name}
- description: ${t.description}
- params: ${JSON.stringify(t.parameters)}
    `.trim(),
  )
  .join("\n\n")}
          `.trim(),
        },
      ],

      response_format: {
        type: "json_schema",
        json_schema: {
          name: "command",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              action: {
                type: ["string", "null"],
              },
              args: {
                type: "object",
              },
            },
            required: ["action", "args"],
          },
        },
      },
    }),
  });

  const data = await response.json();

  // ✅ ONLY correct extraction for structured outputs
  const command = data.output?.[0]?.content?.[0]?.parsed;

  const result: CommandResponse = command ?? {
    action: null,
    args: {},
  };

  return Response.json(result);
}
