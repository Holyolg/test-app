"use client";
import { myProfile } from "@/@types/graphql";
import { MY_PROFILE } from "@/app/graphql/query";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  className?: string;
}

export const MyAvatar: FC<Props> = ({ className }) => {
  const { data } = useQuery<myProfile>(MY_PROFILE);

  return (
    <Avatar className={cn("", className)}>
      {data && <AvatarImage src={data.myProfile.avatar} alt="@shadcn" />}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
