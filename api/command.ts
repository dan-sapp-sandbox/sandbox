export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt, tools } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return new Response("Missing API key", { status: 500 });
  }

  const systemPrompt = `
    You convert user input into JSON commands.

    TOOLS:
    ${JSON.stringify(tools)}

    Return ONLY valid JSON in this format:
    {
      "action": "string or null",
      "args": {}
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
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
    }),
  });

  const data = await response.json();

  const text = data.output?.[0]?.content?.find((c: any) => c.type === "output_text")?.text ?? "";

  console.log("RAW MODEL OUTPUT:", text);

  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch (e) {
    parsed = { action: null, args: {} };
  }

  return Response.json(parsed);
}
