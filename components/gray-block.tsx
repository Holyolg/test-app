import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  value?: string;
  subtitle?: string;
  info?: string;
  text?: string;
}

export const GrayBlock: FC<PropsWithChildren<Props>> = ({
  className,
  title,
  icon,
  value,
  subtitle,
  info,
  text,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "w-[264px] h-[138px] flex flex-col justify-center items-center rounded-lg bg-[#F0F3F8] gap-1",
          className
        )}>
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex gap-[10px]">
          {icon}
          <span className="text-3xl font-semibold text-[#1C3144]">{value}</span>
        </div>
        <span className="font-semibold">{subtitle}</span>
        {info && <span className="font-semibold text-[#7C96B1]">{info}</span>}
      </div>
      <span className="text-[#7C96B1] text-center mt-2">{text}</span>
    </div>
  );
};
