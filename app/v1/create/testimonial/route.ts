import { CreateTestimonial } from "@/db/func/firebase.func";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { id, title, quote, name, pic } = body;
    await CreateTestimonial({ id, title, quote, name, pic});
    return new Response("Testimonial created successfully", {
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
