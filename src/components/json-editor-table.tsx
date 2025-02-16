import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

const jsonDataSharing = [
	{
		id: "asdga#asdg.com",
		name: "Likhil",
		createdAt: "2024-09-23T07:01:58.297Z", // Fixed timestamp format
	},
];

export default function JsonDataEditor() {
	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Name</TableHead>
						<TableHead>Created At</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{jsonDataSharing.map((data) => (
						<TableRow key={data.id}>
							<TableCell className="font-medium">
								{data.name}
							</TableCell>
							<TableCell className="font-medium">
								{format(
									new Date(data.createdAt),
									"MMMM d, yyyy"
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
