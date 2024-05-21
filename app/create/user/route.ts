import { CreateUser } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, name, email, pfp } = body;
    await CreateUser({ id, name, email, pfp });
    return new Response("User created successfully", {
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
