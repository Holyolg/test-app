import { Bell, CircleHelp, Settings } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
	className?: string;
};

export const PersonalOffice: FC<Props> = ({ className }) => {
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
			<Link href={"/my-info"}>
				<Avatar className="size-[38px]">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</Link>
		</nav>
	);
};
