import { GrayBlock } from "@/components/gray-block";
import { HistoryInput } from "@/components/history-input";
import { HistoryTable } from "@/components/history-table";
import { IconWithDay } from "@/components/icon-with-day";
import { Button } from "@/components/ui/button";
import { WhiteBlock } from "@/components/white-block";
import { Clock, Cross, Image, PiggyBank, SquareChartGantt } from "lucide-react";

export default function TimeOff() {
  return (
    <>
      <WhiteBlock className="px-4 pt-[49px] pb-[92px] ">
        <div className="flex justify-end xl:justify-between">
          <div className="flex items-center hidden xl:flex">
            <SquareChartGantt size={16} className="mr-3 text-[#1C3144]" />
            <span className="text-xl text-[#204973]">Time Off</span>
          </div>
          <div className="flex flex-col xl:flex-row items-end gap-[30px]">
            <span>
              Accrual Level Start Date&nbsp;
              <a className="text-[#3758AB]" href="/">
                03/09-2020
              </a>
            </span>
            <Button variant="outline">Add Time Off Policy</Button>
          </div>
        </div>
        <div className="text-sm">
          <hr className="bg-[#7C96B1] h-[2px]" />
          <div className="flex gap-12 xl:justify-center items-center mt-6 snap-x scroll-smooth overflow-x-auto">
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
          <div className="flex flex-col xl:flex-row gap-4 xl:justify-between xl:items-center mt-4">
            <div className="flex gap-4">
              <HistoryInput className="xl:w-[256px] w-[312px]" placeholder="Sick" />
              <HistoryInput className="hidden xl:block w-[96px]" placeholder="All" />
            </div>
            <div className="flex gap-6">
              <HistoryInput className="w-[112px] xl:hidden" placeholder="All" />

              <HistoryInput className="w-[176px]" placeholder="Balance History" />
            </div>
          </div>
        </div>
        <HistoryTable />
      </WhiteBlock>
    </>
  );
}
