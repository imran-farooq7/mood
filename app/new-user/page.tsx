import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
	const user: User = (await currentUser()) as User;
	const { id, emailAddresses } = user;
	// console.log(emailAddresses, "user");
	const isUser = await prisma.user.findUnique({
		where: {
			clerkId: id,
		},
	});
	console.log(isUser, "isUser");
	if (!isUser) {
		const createUser = await prisma.user.create({
			data: {
				clerkId: id,
				email: emailAddresses[0].emailAddress,
			},
		});
	}
	redirect("/journal");
};
const NewUserPage = async () => {
	await createNewUser();
	return <div>NewUserPage</div>;
};
export default NewUserPage;
