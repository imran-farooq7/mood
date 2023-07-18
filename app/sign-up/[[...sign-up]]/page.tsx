import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="w-screen h-screen bg-black flex justify-center items-center text-white">
			<SignUp redirectUrl="/new-user" />
		</div>
	);
}
