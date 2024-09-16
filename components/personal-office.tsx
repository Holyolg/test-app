"use client";
import { Bell, CircleHelp, LogOut, Settings } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useQuery } from "@apollo/client";
import { MY_PROFILE } from "@/app/graphql/query";

type Props = {
	className?: string;
};

export const PersonalOffice: FC<Props> = ({ className }) => {
	const { loading, error, data } = useQuery(MY_PROFILE);
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
				<Avatar className="size-[38px]">
					{data && <AvatarImage src={data.myProfile.avatar} alt="@shadcn" />}
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</Link>
		</nav>
	);
};
