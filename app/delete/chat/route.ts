import { DelChat } from "@/db/func/firebase.func";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    const res = await DelChat(id);
    return new Response(JSON.stringify(res), {
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
