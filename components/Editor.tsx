"use client";
import { useState } from "react";

const Editor = ({ entry }: { entry: any }) => {
	const [value, setValue] = useState(entry.content);
	// console.log(entry);
	return (
		<div className="w-full h-full">
			<textarea
				value={value}
				className="w-full h-full p-8 text-xl border border-black/30"
				cols={30}
				rows={10}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
		</div>
	);
};
export default Editor;
