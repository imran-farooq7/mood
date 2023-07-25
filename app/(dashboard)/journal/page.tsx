import { prisma } from "@/utils/db";
import { getUserClerkId } from "@/utils/auth";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";

const getJournalEntries = async () => {
	const user = await getUserClerkId();
	const entries = await prisma.journalEntry.findMany({
		where: {
			userId: user?.id as string,
		},
		orderBy: {
			createdAt: "asc",
		},
	});
	return entries;
};
const JournalPage = async () => {
	const journalEntires = await getJournalEntries();

	// console.log(journalEntires, "journal");
	return (
		<div className="p-10 bg-zinc-400/10 h-full">
			<h2 className="text-3xl mb-4">Journal</h2>
			<div className="grid grid-cols-3 gap-4 ">
				<NewEntryCard />
				{journalEntires.map((entry) => (
					<Link href={`/journal/${entry.id}`} key={entry.id}>
						<EntryCard entry={entry} />
					</Link>
				))}
			</div>
		</div>
	);
};
export default JournalPage;
