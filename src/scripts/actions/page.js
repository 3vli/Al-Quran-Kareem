import { baseAPI } from "../lib/axios";

export const getPage = async (pageNumber) => {
	try {
		const { data: res } = await baseAPI.get(`/page/${pageNumber}`);
		return res.data;
	} catch (error) {
		throw { error };
	}
};
