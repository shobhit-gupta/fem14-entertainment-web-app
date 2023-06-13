export const load = async () => {
	try {
		const shows = (await import('$lib/data/data.json')).default as Show[];
		const recommended = shows.filter((s) => !s.isTrending);
		const trending = shows.filter((s) => s.isTrending);
		return { shows: { recommended, trending } };
	} catch (e) {
		console.error(e);
	}
};
