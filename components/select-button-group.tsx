import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  className?: string;
}
export const SelectButtonGroup: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <Select>
        <SelectTrigger className="w-[162px]">
          <SelectValue placeholder="Request a Change" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>...</SelectLabel>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[56px]">
          <SelectValue placeholder={<Settings size={16} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>...</SelectLabel>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
