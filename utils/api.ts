const createURL = (path: string) => {
	return window.location.origin + path;
};

export const createEntry = async () => {
	const res = await fetch(
		new Request(createURL("/api/journal"), {
			method: "POST",
		})
	);
	console.log(res);
	if (res.ok) {
		const data = await res.json();
		console.log(res);
		return data.data;
	}
};
