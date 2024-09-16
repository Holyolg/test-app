"use client";

import { AsideBlock } from "@/components/aside-block";
import { Container } from "@/components/container";
import Menu from "@/components/menu";
import { SelectButtonGroup } from "@/components/select-button-group";
import TimeOff from "./time-off/page";
import { useQuery } from "@apollo/client";
import { MY_PROFILE } from "@/app/graphql/query";

export default function MyInfo() {
	const { loading, error, data } = useQuery(MY_PROFILE);
	return (
		<>
			<Container className="bg-[#f1f3f8] min-h-screen leading-4 ">
				<div className="w-full flex flex-col justify-between bg-[--light-blue] h-[184px] px-[72px] z-10 relative">
					<div className="h-[52px]"></div>
					<div className="w-full max-w-[1046px] flex justify-between self-end items-center">
						<span className="font-semibold text-[28px]">
							{loading ? "Loading..." : data && data.myProfile.name}
							{error && "Error measege"}
						</span>
						<SelectButtonGroup />
					</div>
					<Menu />
				</div>
				<div className="px-[72px] flex gap-[25px] relative -top-4">
					<AsideBlock
						avatar={data && data.myProfile.avatar}
						className="relative z-20"
					/>
					<TimeOff />
				</div>
			</Container>
		</>
	);
}
