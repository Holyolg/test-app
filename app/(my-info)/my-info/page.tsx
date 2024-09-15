"use client";

import { AsideBlock } from "@/components/aside-block";
import { Container } from "@/components/container";
import Menu from "@/components/menu";
import { SelectButtonGroup } from "@/components/select-button-group";
import TimeOff from "./time-off/page";

export default function MyInfo() {
  return (
    <>
      <Container className="bg-[#f1f3f8] min-h-screen leading-4 ">
        <div className="w-full flex flex-col justify-between bg-[--light-blue] h-[184px] px-[72px] z-10 relative">
          <div className="h-[52px]"></div>
          <div className="w-full max-w-[1046px] flex justify-between self-end items-center">
            <span className="font-semibold text-[28px]">Alexandra</span>
            <SelectButtonGroup />
          </div>
          <Menu />
        </div>
        <div className="px-[72px] flex gap-[25px] relative -top-4">
          <AsideBlock className="relative z-20" />
          <TimeOff />
        </div>
      </Container>
    </>
  );
}
