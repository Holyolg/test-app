import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { FC } from "react";

interface Props {
  className?: string;
}

export const MobileNavButton: FC<Props> = ({ className }) => {
  return (
    <button className={cn("", className)}>
      <AlignJustify size={24} />
    </button>
  );
};
