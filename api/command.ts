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

  const toolDescriptions = tools.map((t) => ({
    name: t.name,
    description: t.description,
    parameters: t.parameters,
  }));

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
          content: "You convert user input into structured tool calls.",
        },
        {
          role: "user",
          content: `User request: ${prompt}\n\nTools: ${JSON.stringify(toolDescriptions)}`,
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

  const command: CommandResponse | undefined = data.output?.[0]?.content?.[0]?.parsed;

  const safeCommand: CommandResponse = command ?? {
    action: null,
    args: {},
  };

  return Response.json(safeCommand);
}
