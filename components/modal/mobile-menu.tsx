import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import React, { FC } from "react";

interface Props {
	className?: string;
}

export const MobileNavButton: FC<Props> = ({ className }) => {
	return (
		<button className={cn("", className)}>
			<AlignJustify size={16} />
		</button>
	);
};
