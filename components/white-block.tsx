import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const WhiteBlock: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={cn("bg-white w-full flex flex-col gap-4 rounded-xl text-sm p-6", className)}>
      {children}
    </div>
  );
};
