
import { createAdminClient } from "@/db/appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const origin = "saidevdhal.xyz"
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  const { account } = await createAdminClient();
  const session = await account.createSession(userId!, secret!);

  cookies().set("folio-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return NextResponse.redirect(`${origin}/settings`);
}
