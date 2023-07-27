import Editor from "@/components/Editor";
import { getUserClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
const getEntry = async ({ id }: { id: string }) => {
	const user = await getUserClerkId();
	const entry = await prisma.journalEntry.findUnique({
		where: {
			userId_id: {
				userId: user.id,
				id,
			},
		},
	});
	return entry;
};
const EntryPage = async ({ params }: { params: { id: string } }) => {
	const analysisData = [
		{
			name: "Summary",
			value: "",
		},
		{
			name: "Subject",
			value: "",
		},
		{
			name: "Mood",
			value: "",
		},
		{
			name: "Negative",
			value: false,
		},
	];
	const entry = await getEntry(params);
	// console.log(params.id);

	return (
		<div className="w-full h-full grid grid-cols-3">
			<div className="col-span-2">
				<Editor entry={entry} />
			</div>
			<div>
				<div className="bg-blue-300 px-6 py-5">
					<h2 className="text-2xl">Analysis</h2>
				</div>
				<div>
					<ul>
						{analysisData.map((data) => {
							return (
								<li
									key={data.name}
									className="flex items-center justify-between px-2 py-4 border-b border-black/10 border-t"
								>
									<span className="text-lg font-semibold">{data.name}</span>
									<span>{data.value}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default EntryPage;
