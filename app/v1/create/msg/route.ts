import { CreateMsg } from "@/db/func/firebase.func";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, from, to, message, chatId  } = body;
    await CreateMsg({ id, from, to, message, chatId  });
    return new Response("Mesg created successfully", {
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
