import { GetAllStacks } from "@/db/func/firebase.func";

export async function GET() {
  try {
    const res = await GetAllStacks();
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
