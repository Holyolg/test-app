"use client";

import { myProfile } from "@/@types/graphql";
import { MY_PROFILE } from "@/app/graphql/query";
import { AsideBlock } from "@/components/aside-block";
import { Container } from "@/components/container";
import Menu from "@/components/menu";
import { MobileSelectButtonGroup } from "@/components/mobile-selected-button-group";
import { MyAvatar } from "@/components/my-avatar";
import { SelectButtonGroup } from "@/components/select-button-group";
import { useQuery } from "@apollo/client";
import TimeOff from "./time-off/page";

export default function MyInfo() {
  const { loading, error, data } = useQuery<myProfile>(MY_PROFILE);

  return (
    <>
      <Container className="bg-[#f1f3f8] min-h-screen leading-4 ">
        <div className="w-full flex flex-col justify-between bg-[--light-blue] h-[184px] px-6 xl:px-[72px] z-10 relative">
          <div className="xl:h-[52px]"></div>
          <div className="w-full max-w-[1046px] flex justify-between self-end items-center ">
            <div className="flex gap-[22px]">
              <MyAvatar className="size-[60px] xl:hidden" />

              <span className="font-semibold text-[28px]">
                {loading ? "Loading..." : data?.myProfile.name}
                {error && "Error measege"}
              </span>
            </div>
            <SelectButtonGroup className="hidden xl:flex" />
            <MobileSelectButtonGroup className="xl:hidden self-start" />
          </div>
          <Menu />
        </div>
        <div className="px-0 xl:px-[72px] flex gap-[25px] relative -top-4">
          <AsideBlock className="relative z-20 hidden xl:flex" />
          <TimeOff />
        </div>
      </Container>
    </>
  );
}
