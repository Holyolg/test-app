"use client";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { MY_PROFILE } from "@/app/graphql/query";

interface Props {
	className?: string;
}

export const MobileAvatar: FC<Props> = ({ className }) => {
	const { data } = useQuery(MY_PROFILE);

	return (
		<Link href={"/my-info"} className={cn("", className)}>
			<Avatar className="size-[38px]">
				{data && <AvatarImage src={data.myProfile.avatar} alt="@shadcn" />}
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</Link>
	);
};
