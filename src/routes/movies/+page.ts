export const load = async () => {
	try {
		const shows = (await import('$lib/data/data.json')).default as Show[];
		const movies = shows.filter((s) => s.category === 'Movie');
		return { movies };
	} catch (e) {
		console.error(e);
	}
};
