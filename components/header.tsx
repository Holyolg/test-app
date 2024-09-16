import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Container } from "./container";
import { MobileAvatar } from "./mobile-avatar";
import { MobileNavButton } from "./mobile-nav-button";
import { PersonalOffice } from "./personal-office";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <Container className={cn("py-1.5 px-6 xl:p-6 xl:pb-3", className)}>
      <header className="flex flex-1 xl:justify-center xl:gap-16 justify-between items-center">
        <span className="font-semibold text-xl">HarmonyHR</span>

        <nav className="max-w-[523px] self-end xl:block hidden">
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
        <div className="flex gap-6">
          <MobileNavButton className="xl:hidden" />
          <MobileAvatar className="xl:hidden" />
        </div>
        <PersonalOffice className="hidden xl:flex" />
      </header>
    </Container>
  );
};
