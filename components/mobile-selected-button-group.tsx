import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { FC } from "react";

interface Props {
  className?: string;
}

export const MobileSelectButtonGroup: FC<Props> = ({ className }) => {
  return (
    <button className={cn("", className)}>
      <EllipsisVertical size={16} />
    </button>
  );
};
