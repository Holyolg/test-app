"use client";
import { Bell, CircleHelp, LogOut, Settings } from "lucide-react";
import { FC } from "react";

import { myProfile } from "@/@types/graphql";
import { MY_PROFILE } from "@/app/graphql/query";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MyAvatar } from "./my-avatar";

type Props = {
  className?: string;
};

export const PersonalOffice: FC<Props> = ({ className }) => {
  const { data } = useQuery<myProfile>(MY_PROFILE);
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "access_token=; Max-Age=-1;";
    document.cookie = "refresh_token=; Max-Age=-1;";
    useAuthStore.getState().setAuthenticated(false);
    router.push("/auth");
  };

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      <Link href={"/my-info"}>
        <Settings size={24} />
      </Link>
      <Link href={"/my-info"}>
        <CircleHelp size={24} />
      </Link>
      <Link href={"/my-info"}>
        <Bell size={24} />
      </Link>
      <button onClick={handleLogout}>
        <LogOut size={24} />
      </button>
      <Link href={"/my-info"}>
        <MyAvatar className="size-[38px]"/>
      </Link>
    </nav>
  );
};
