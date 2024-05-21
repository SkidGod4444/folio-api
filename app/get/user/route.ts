
import { GetUser } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    const user = await GetUser(id);
    return new Response(JSON.stringify(user), {
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
