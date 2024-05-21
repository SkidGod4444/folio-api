import { CreateLabel } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, name } = body;
    await CreateLabel({ id, name });
    return new Response("Label created successfully", {
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
