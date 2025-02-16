import JsonEditor from "@/components/json-editor";
import React from "react";

export default function DashboardPage() {
	return (
		<div>
			<div className="my-8">
				<h1 className="text-3xl font-bold">Dashboard</h1>
				<p className="text-muted-foreground">
					manage the sharing of json data.
				</p>
			</div>
			<JsonEditor />
		</div>
	);
}
