import { Search } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export const SearchInput: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				"flex rounded-2xl flex-1 max-w-[48px] lg:max-w-[395px] w-full relative",
				className
			)}>
			<Search
				className="absolute top-1/2 translate-y-[-50%] left-4 "
				size={16}
			/>
			<input
				className="max-w-[48px] lg:max-w-[395px] w-full h-full rounded-2xl border border-solid border-black placeholder-white lg:placeholder-black text-black lg:pl-14 py-2 px-4"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
