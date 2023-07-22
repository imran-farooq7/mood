import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
	const user = (await currentUser()) as User;
	console.log(user);

	const match = await prisma.user.findUnique({
		where: {
			clerkId: user.id as string,
		},
	});
	// console.log(!match);
	if (!match) {
		await prisma.user.create({
			data: {
				clerkId: user.id,
				email: user?.emailAddresses[0].emailAddress,
			},
		});
	}

	redirect("/journal");
};

const NewUser = async () => {
	await createNewUser();
	return <div>...loading</div>;
};

export default NewUser;
