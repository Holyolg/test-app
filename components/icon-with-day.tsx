import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
  day?: string;
  icon?: React.ReactNode;
  value?: string;
}

export const IconWithDay: FC<PropsWithChildren<Props>> = ({ className, day, icon, value }) => {
  return (
    <>
      <div className={cn("flex items-center", className)}>
        {icon}
        <div className="flex flex-col ml-[14px]">
          <span className="mb-1">{day}</span>

          <div className="flex items-center gap-1">
            <div className="bg-[#1C3144] rounded-full size-2"></div>
            <span>{value}</span>
          </div>
        </div>
      </div>
      <hr className="bg-[#7C96B1] h-[2px]" />
    </>
  );
};
