import { gql } from "@apollo/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import client from "./app/apollo/client";
import { refreshAccessToken } from "./lib/refresh-access-token";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  try {
    const res = await client.query({
      query: gql`
        {
          myProfile {
            id
          }
        }
      `,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return NextResponse.next();
  } catch (error: any) {
    if (error?.graphQLErrors?.some((e: any) => e.extensions.code === "UNAUTHENTICATED")) {
      try {
        refreshAccessToken();
        return NextResponse.next();
      } catch (refreshError) {
        console.error("Failed to refresh access token:", refreshError);
        return NextResponse.redirect("/auth");
      }
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
export const config = {
  matcher: "/my-info/:path*",
};
