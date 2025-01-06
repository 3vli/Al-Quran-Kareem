export const redirect = (url: string) => {
	window.history.pushState({}, "", `${window.location.pathname}${url}`);
};
