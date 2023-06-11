export const load = async () => {
	const shows = (await import('$lib/data/data.json')).default;
	return { shows };
};
