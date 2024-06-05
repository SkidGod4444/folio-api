import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const blogs = await redis.get("BLOGS");

    return new Response(JSON.stringify(blogs), {
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
