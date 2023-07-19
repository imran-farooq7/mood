import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
	const { userId } = auth();
	let href = userId ? "/journal" : "/new-user";
	return (
		<div className="w-screen h-screen bg-black flex justify-center items-center text-white">
			<div className="max-w-2xl w-full mx-auto">
				<h1 className="text-6xl mb-3">The best Journal app</h1>
				<p className="text-2xl text-white/60 mb-3">
					This is the best app for tracking your mood thorough out your life.All
					you have to do is be honest
				</p>
				<div>
					<button className="bg-blue-700 text-xl rounded-md px-4 py-2">
						<Link href={href}>Get started</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
