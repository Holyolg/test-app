"use client";

import { AsideBlock } from "@/components/aside-block";
import { Container } from "@/components/container";
import { GrayBlock } from "@/components/gray-block";
import { HistoryInput } from "@/components/history-input";
import { HistoryTable } from "@/components/history-table";
import { IconWithDay } from "@/components/icon-with-day";
import Menu from "@/components/menu";
import { SelectButtonGroup } from "@/components/select-button-group";
import { Button } from "@/components/ui/button";
import { WhiteBlock } from "@/components/white-block";
import { Clock, Cross, Image, PiggyBank, SquareChartGantt } from "lucide-react";

export default function MyInfo() {
  return (
    <>
      <Container className="bg-[#f1f3f8] min-h-screen">
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
          <WhiteBlock className="px-4 pt-[49px] pb-[92px]">
            <div className="flex justify-between">
              <div className="flex items-center">
                <SquareChartGantt size={16} className="mr-3 text-[#1C3144]" />
                <span className="text-xl text-[#204973]">Time Off</span>
              </div>
              <div className="flex items-end gap-[30px]">
                Accrual Level Start Date
                <a className="text-color-[#3758AB]" href="/">
                  03/09-2020
                </a>
                <Button variant="outline">Add Time Off Policy</Button>
              </div>
            </div>
            <div className="text-sm">
              <hr className="bg-[#7C96B1] h-[2px]" />
              <div className="flex gap-12 justify-center items-center mt-6">
                <GrayBlock
                  title="Sick"
                  icon={<Cross size={30} className="text-[#1C3144]" />}
                  value="3"
                  subtitle="Days Available"
                  info="1 day scheduled"
                  text="Sick Full-Time"
                />
                <GrayBlock
                  title="Annual Leave "
                  icon={<Image size={30} className="text-[#1C3144]" />}
                  value="10.3"
                  subtitle="Days Available"
                  text="Holiday Full-Time"
                />
                <GrayBlock
                  title="Comp/in Lieu Time"
                  icon={<SquareChartGantt size={30} className="text-[#1C3144]" />}
                  value="3"
                  subtitle="Human Used(YTD)"
                  text="Comp/in Lieu Time Flexible Policy"
                />
              </div>
              <div className="flex items-center mt-6">
                <Clock size={16} className="mr-2 text-[#1C3144]" />
                <span className="text-sm text-[#204973]">Upcoming Time Off</span>
              </div>
            </div>
            <hr className="bg-[#7C96B1] h-[2px]" />
            <div className="flex flex-col gap-6">
              <IconWithDay
                icon={<Cross size={30} className="text-[#1C3144]" />}
                day="Jan 27"
                value="1 day of Sick"
              />
              <IconWithDay
                icon={<PiggyBank size={30} className="text-[#1C3144]" />}
                day="Jul 4"
                value="Independence Day"
              />
            </div>
            <div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#1C3144]" />
                <span className="text-sm text-[#204973]">History</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4">
                  <HistoryInput className=" w-[256px]" placeholder="Sick" />
                  <HistoryInput className=" w-[96px]" placeholder="All" />
                </div>
                <HistoryInput className=" w-[176px]" placeholder="Balance History" />
              </div>
            </div>
            <HistoryTable />
          </WhiteBlock>
        </div>
      </Container>
    </>
  );
}
