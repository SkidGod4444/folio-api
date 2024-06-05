import { GetAllBlogs, GetAllLabels } from "@/db/func/firebase.func";
import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const labels = await GetAllLabels();
    await redis.set("LABELS", JSON.stringify(labels));

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
