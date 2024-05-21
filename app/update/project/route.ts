import { UpdateProject } from "@/db/func/firebase.func";

export async function PUT(req: Request) {
    try {
      const body = await req.json();
      const { id, ...updateData } = body;
      const result = await UpdateProject(id, updateData);
      return new Response(JSON.stringify(result), {
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