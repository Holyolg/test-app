import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
}

const Menu: FC<Props> = ({ className }) => {
  return (
    <nav
      className={cn(
        "max-w-[1046px] flex xl:self-end gap-2 text-sm text-nowrap overflow-x-auto xl:overflow-visible",
        className
      )}>
      <Link className="p-4" href={"/my-info"}>
        Personal
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Job
      </Link>
      <Link className="p-4 bg-white rounded-t-[8px]" href={"/my-info"}>
        Time Off
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Emergency
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Reports
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Documents
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Notes
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Benefits
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Training
      </Link>
      <Link className="p-4" href={"/my-info"}>
        Assets
      </Link>
      <Link className="p-4 flex" href={"/my-info"}>
        More
        <ChevronDown className="ml-1 self-center font-bold stroke-[4px]" size={16} />
      </Link>
    </nav>
  );
};

export default Menu;
