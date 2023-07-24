import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserClerkId = async () => {
	const { userId } = await auth();
	const getUser = await prisma.user.findUniqueOrThrow({
		where: {
			clerkId: userId as string,
		},
	});
	// console.log(userId);
	return getUser;
};
