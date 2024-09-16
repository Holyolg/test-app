import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import { FC } from "react";
import { Input } from "./ui/input";

interface Props {
  className?: string;
  placeholder?: string;
}

export const HistoryInput: FC<Props> = ({ className, placeholder }) => {
  return (
    <div className={cn("relative", className)}>
      <Input
        className="flex items-center h-[35px] border-[#7C96B1] rounded-xl placeholder-black"
        placeholder={placeholder}></Input>
      <X className="text-[#1C314499]/60 absolute right-[35px] top-1/2 -translate-y-1/2 h-[35px] cursor-pointer" />
      <button className="absolute w-6 bg-[#DAE6F2] h-9 rounded-r-xl  border-y-[1px] border-r-[1px] border-[#7C96B1]  right-0 top-1/2 -translate-y-1/2 h-[35px]">
        <ChevronDown className="text-[#1C3144]" />
      </button>
    </div>
  );
};
