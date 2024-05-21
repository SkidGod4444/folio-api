import { CreateChat } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, user1, user2, User1Msgs, User2Msgs  } = body;
    await CreateChat({ id, user1, user2, User1Msgs, User2Msgs  });
    return new Response("Chat created successfully", {
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
