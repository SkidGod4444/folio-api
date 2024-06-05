import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function DELETE() {
  try {
    await redis.del("BLOGS");
    await redis.del("PROJECTS");
    await redis.del("LABELS");
    await redis.del("STACKS");
    await redis.del("REVIEWS");

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
