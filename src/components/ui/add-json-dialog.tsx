"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { Label } from "@radix-ui/react-label";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { Input } from "./input";

export default function AddJsonDialog() {
	const [jsonData, setjsonData] = useState("");
	const [jsonName, setjsonName] = useState("");

	const handleSave = () => {
		return {
			jsonName,
			jsonData,
		};
	};
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button>Add JSON Data</Button>
				</DialogTrigger>
				<DialogContent className="max-w-4xl ">
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							Edit and save your JSON data.
						</DialogDescription>
					</DialogHeader>
					<div>
						<div>
							<Label>JSON Name</Label>
							<Input
								value={jsonName}
								placeholder="Enter your JSON name."
								className="my-2"
								onChange={(e) => setjsonName(e.target.value)}
							/>
							<CodeMirror
								value={jsonData}
								height="400px"
								extensions={[json()]}
								onChange={(value) => setjsonData(value)}
							/>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button type="button" variant={"secondary"}>
									Close
								</Button>
							</DialogClose>
							<Button
								disabled={!jsonData || !jsonName}
								onClick={handleSave}
							>
								Save
							</Button>
						</DialogFooter>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
