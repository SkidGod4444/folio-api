import { CreateBlog } from "@/db/func/firebase.func";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, title, content, source, labels } = body;
    await CreateBlog({ id, title, content, source, labels });
    return new Response("Blog created successfully", {
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
