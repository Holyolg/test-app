import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Container } from "./container";
import { PersonalOffice } from "./personal-office";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <Container className={cn("p-6 pb-3", className)}>
      <div className="flex flex-1 justify-center gap-16">
        <span className="font-semibold">HarmonyHR</span>

        <nav className="max-w-[523px] self-end">
          <Link className="p-4" href={"/my-info"}>
            Home
          </Link>
          <Link className="p-4 bg-[--light-blue] rounded-t-[8px]" href={"/my-info"}>
            My Info
          </Link>
          <Link className="p-4" href={"/my-info"}>
            People
          </Link>
          <Link className="p-4" href={"/my-info"}>
            Hiring
          </Link>
          <Link className="p-4" href={"/my-info"}>
            Reports
          </Link>
          <Link className="p-4" href={"/my-info"}>
            Files
          </Link>
        </nav>
        <SearchInput />
        <PersonalOffice />
      </div>
    </Container>
  );
};
