const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-screen h-screen bg-black flex justify-center items-center text-white">
			{children}
		</div>
	);
};
export default layout;
