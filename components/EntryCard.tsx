import { GetResult } from "@prisma/client/runtime/library";

const EntryCard = ({
	entry,
}: {
	entry: GetResult<
		{
			id: string;
			createdAt: Date;
			updatedAt: Date;
			content: string;
			userId: string;
		},
		unknown
	> & {};
}) => {
	// console.log(entry);
	return <div>{entry.id}</div>;
};
export default EntryCard;
