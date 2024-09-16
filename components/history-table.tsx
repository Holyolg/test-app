import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";
import { FC } from "react";

interface Props {
	className?: string;
}

const history = [
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "",
		earnedDays: "3.00",
		balance: "3.00",
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "-6",
		earnedDays: "",
		balance: "3.00",
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "",
		earnedDays: "3.00",
		balance: "3.00",
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "",
		earnedDays: "3.00",
		balance: "3.00",
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "-6",
		earnedDays: "",
		balance: "3.00",
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		UsedDays: "",
		earnedDays: "3.00",
		balance: "3.00",
	},
];

export const HistoryTable: FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex items-center text-base", className)}>
			<Table>
				<TableHeader>
					<TableRow className=" bg-[--light-blue]">
						<TableHead className="w-[100px]">
							<button className="flex gap-1">
								Date <MoveDown size={16} className="text-[#1C3144]" />
							</button>
						</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Used Days (-)</TableHead>
						<TableHead>Earned Days (+)</TableHead>
						<TableHead>Balance</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{history.map((history, key) => (
						<TableRow key={key} className="hover:bg-[--light-blue]">
							<TableCell className="">{history.date}</TableCell>
							<TableCell>{history.description}</TableCell>
							<TableCell>{history.UsedDays}</TableCell>
							<TableCell className="">{history.earnedDays}</TableCell>
							<TableCell className="">{history.balance}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
