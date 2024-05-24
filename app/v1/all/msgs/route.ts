import { GetAllMsgs } from "@/db/func/firebase.func";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await GetAllMsgs();
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
