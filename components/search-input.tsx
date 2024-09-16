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
        "flex rounded-xl flex-1 max-w-[48px] xl:max-w-[395px] w-full relative",
        className
      )}>
      <Search className="absolute top-1/2 translate-y-[-50%] left-4 " size={16} />
      <input
        className="max-w-[48px] xl:max-w-[395px] w-full h-full rounded-xl border border-solid border-black placeholder-white xl:placeholder-black text-black xl:pl-14 py-2 px-4"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
