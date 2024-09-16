"use client";

import { MY_PROFILE } from "@/app/graphql/query";
import { AsideBlock } from "@/components/aside-block";
import { Container } from "@/components/container";
import Menu from "@/components/menu";
import { MobileSelectButtonGroup } from "@/components/mobile-selected-button-group";
import { SelectButtonGroup } from "@/components/select-button-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@apollo/client";
import TimeOff from "./time-off/page";

export default function MyInfo() {
  const { loading, error, data } = useQuery(MY_PROFILE);
  return (
    <>
      <Container className="bg-[#f1f3f8] min-h-screen leading-4 ">
        <div className="w-full flex flex-col justify-between bg-[--light-blue] h-[184px] px-6 xl:px-[72px] z-10 relative">
          <div className="xl:h-[52px]"></div>
          <div className="w-full max-w-[1046px] flex justify-between self-end items-center ">
            <div className="flex gap-[22px]">
              <Avatar className="size-[60px] xl:hidden">
                <AvatarImage src={data && data.myProfile.avatar} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <span className="font-semibold text-[28px]">
                {loading ? "Loading..." : data && data.myProfile.name}
                {error && "Error measege"}
              </span>
            </div>
            <SelectButtonGroup className="hidden xl:flex" />
            <MobileSelectButtonGroup className="xl:hidden self-start" />
          </div>
          <Menu />
        </div>
        <div className="px-0 xl:px-[72px] flex gap-[25px] relative -top-4">
          <AsideBlock
            avatar={data && data.myProfile.avatar}
            className="relative z-20 hidden xl:flex"
          />
          <TimeOff />
        </div>
      </Container>
    </>
  );
}
