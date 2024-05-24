import { CreateStack } from "@/db/func/firebase.func";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, name } = body;
    await CreateStack({ id, name });
    return new Response("Stack created successfully", {
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
