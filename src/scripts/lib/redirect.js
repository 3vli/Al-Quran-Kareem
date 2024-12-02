export const redirect = (url) => {
	window.history.pushState({}, "", `${window.location.pathname}${url}`);
};
