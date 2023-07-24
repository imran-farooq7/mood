import { getUserClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	// const data = await req.json();
	const { id } = await getUserClerkId();
	const createNewEntry = await prisma.journalEntry.create({
		data: {
			content: "this is a new entry",
			userId: id,
		},
	});
	revalidatePath("/journal");
	return NextResponse.json({ data: createNewEntry });
};
