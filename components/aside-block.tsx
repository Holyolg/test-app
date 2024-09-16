import { cn } from "@/lib/utils";
import {
  CircleUserRound,
  Clock,
  Facebook,
  Globe,
  Hash,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
} from "lucide-react";
import { FC } from "react";
import { MyAvatar } from "./my-avatar";
import { WhiteBlock } from "./white-block";

interface Props {
  className?: string;
}

export const AsideBlock: FC<Props> = ({ className }) => {
  return (
    <aside className={cn("max-w-[225px] relative flex flex-col gap-4", className)}>
      <MyAvatar className="size-[150px] absolute -top-[136px] inset-x-0 mx-auto" />
      <WhiteBlock className="text-nowrap">
        <div className="flex items-center">
          <Phone size={16} className="mr-2" />
          <span>07911 654321</span>
        </div>

        <div className="flex items-center">
          <Mail size={16} className="mr-2" />
          <span>avd.yana@videorollnet</span>
        </div>
        <div className="flex gap-3">
          <Linkedin size={16} />
          <Facebook size={16} />
          <Twitter size={16} />
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="flex">
          <span>Hire Date</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Sep. 3,2020</span>

          <span>3y - 9m - 20d</span>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Hash size={16} className="mr-2" />
            <span>5</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>Full-Time</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2" />
            <span>Operations</span>
          </div>
          <div className="flex items-center">
            <Globe size={16} className="mr-2" />
            <span>Europe</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>London, UK</span>
          </div>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="">Direct Reports</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <CircleUserRound size={16} className="mr-2" />
            <span>Shane</span>
          </div>
          <div className="flex items-center">
            <CircleUserRound size={16} className="mr-2" />
            <span>Nathan</span>
          </div>
          <div className="flex items-center">
            <CircleUserRound size={16} className="mr-2" />
            <span>Mitchell</span>
          </div>
          <div className="flex items-center">
            <CircleUserRound size={16} className="mr-2" />
            <span>Philip</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2" />
            <span>4 more</span>
          </div>
        </div>
      </WhiteBlock>
    </aside>
  );
};
