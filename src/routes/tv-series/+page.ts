export const load = async () => {
	try {
		const shows = (await import('$lib/data/data.json')).default as Show[];
		const tv = shows.filter((s) => s.category === 'TV Series');
		return { tv };
	} catch (e) {
		console.error(e);
	}
};
