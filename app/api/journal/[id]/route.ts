import { getUserClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request, { params }) => {
	const { content } = await req.json();
	// console.log(content);
	const { id } = params;
	const user = await getUserClerkId();
	const updatedEntry = await prisma.journalEntry.update({
		where: {
			userId_id: {
				userId: user.id,
				id,
			},
		},
		data: {
			content,
		},
	});
	return NextResponse.json({ data: updatedEntry });
};
