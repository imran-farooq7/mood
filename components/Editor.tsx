"use client";
import { updateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";
import Spinner from "./Spinner";

const Editor = ({ entry }: { entry: any }) => {
	const [value, setValue] = useState(entry.content);
	const [isLoading, setIsLoading] = useState(false);
	useAutosave({
		data: value,
		onSave: async (_value) => {
			setIsLoading(true);
			await updateEntry(entry.id, _value);
			setIsLoading(false);
		},
	});
	// console.log(value);
	return (
		<div className="w-full h-full">
			{isLoading && <Spinner loading={isLoading} />}
			<textarea
				value={value}
				className="w-full h-full p-8 text-xl border border-black/30"
				cols={30}
				rows={10}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};
export default Editor;
