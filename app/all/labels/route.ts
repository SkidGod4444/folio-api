import { GetAllLabels } from "@/db/func/firebase.func";

export async function GET() {
  try {
    const res = await GetAllLabels();
    return new Response(JSON.stringify(res), {
       headers: {
        "content-type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
       headers: {
        "content-type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  }
}
