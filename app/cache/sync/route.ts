import { GetAllBlogs, GetAllLabels, GetAllProjects, GetAllStacks, GetAllTestimonials } from "@/db/func/firebase.func";
import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const blogs = await GetAllBlogs();
    const proj = await GetAllProjects();
    const labels = await GetAllLabels();
    const rev = await GetAllTestimonials();
    const stacks = await GetAllStacks();

    await redis.set("BLOGS", JSON.stringify(blogs));
    await redis.set("PROJECTS", JSON.stringify(proj));
    await redis.set("LABELS", JSON.stringify(labels));
    await redis.set("STACKS", JSON.stringify(stacks));
    await redis.set("REVIEWS", JSON.stringify(rev));

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error setting cache:", error);

    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.cause || "Unknown error",
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
