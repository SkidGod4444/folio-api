import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rev = await redis.get("REVIEWS");

    return new Response(JSON.stringify(rev), {
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
