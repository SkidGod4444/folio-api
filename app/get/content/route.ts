import { GetContent } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    const content = await GetContent(id);
    return new Response(JSON.stringify(content), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
