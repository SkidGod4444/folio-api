import { GetAllUsers } from "@/db/func/firebase.func";

export async function GET() {
  try {
    const user = await GetAllUsers();
    return new Response(JSON.stringify(user), {
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
