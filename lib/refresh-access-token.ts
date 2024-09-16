import client from "@/app/apollo/client";
import { REFRESH_TOKEN } from "@/app/graphql/mutations";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const refreshAccessToken = async () => {
  const refreshToken = cookies().get("refresh_token")?.value;
  if (!refreshToken) {
    throw new Error("Refresh token missing");
  }

  const { data } = await client.mutate({
    mutation: REFRESH_TOKEN,
    variables: { refreshToken },
  });

  if (data && data.refreshToken) {
    const { access_token, refresh_token } = data.refreshToken;
    setCookie("access_token", access_token);
    setCookie("refresh_token", refresh_token);

    return access_token;
  }
  throw new Error("Failed to refresh access token");
};
