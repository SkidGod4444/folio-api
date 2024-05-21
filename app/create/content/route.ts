import { CreateContent } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, title, source, labels } = body;
    await CreateContent({ id, title, source, labels });
    return new Response("Content created successfully", {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error: " + error, {
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
