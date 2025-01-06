export const getSearchQuery = () => {
	const url = window.location.search;
	const params = new URLSearchParams(url);

	return params;
};
