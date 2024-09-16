import { Login } from "@/@types/graphql";
import { LOGIN_USER } from "@/app/graphql/mutations";
import { useMutation } from "@apollo/client";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth";

export const useLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN_USER);
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);
  const router = useRouter();

  const auth = async (email: string, password: string) => {
    try {
      const { data }: { data?: Login } = await login({
        variables: { email, password },
      });
      if (!data?.login) {
        throw new Error("Server error");
      }

      const { access_token, refresh_token } = data.login;

      if (access_token === null || refresh_token === null) {
        throw new Error("Server error");
      }

      setCookie("access_token", access_token);
      setCookie("refresh_token", refresh_token);

      setAuthenticated(true);

      router.push("/my-info");
    } catch (error) {
      console.error("[LOGIN_ERROR]", error);
    }
  };

  return { auth, loading, error };
};
