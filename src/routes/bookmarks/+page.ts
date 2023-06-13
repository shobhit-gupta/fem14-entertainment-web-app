export const load = async () => {
	try {
		const shows = (await import('$lib/data/data.json')).default as Show[];
		const movies = shows.filter((s) => s.isBookmarked && s.category === 'Movie');
		const tv = shows.filter((s) => s.isBookmarked && s.category === 'TV Series');
		return { bookmarked: { movies, tv } };
	} catch (e) {
		console.error(e);
	}
};
