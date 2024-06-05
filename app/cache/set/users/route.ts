import { GetAllBlogs, GetAllUsers } from "@/db/func/firebase.func";
import { redis } from "@/db/init/redis";
export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const users = await GetAllUsers();
    await redis.set("USERS", JSON.stringify(users));

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
