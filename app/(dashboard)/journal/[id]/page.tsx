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
	// const {id}  = params
	const entry = await getEntry(params);
	// console.log(params.id);

	return <Editor entry={entry} />;
};
export default EntryPage;
