import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import JsonDataEditor from "./json-editor-table";
import AddJsonDialog from "./ui/add-json-dialog";

export default function JsonEditor() {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Json Data sharing</CardTitle>
					<CardDescription>
						Share the text with anyone.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<JsonDataEditor />
				</CardContent>
				<CardFooter>
					<AddJsonDialog />
				</CardFooter>
			</Card>
		</div>
	);
}
