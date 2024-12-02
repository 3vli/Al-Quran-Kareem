import { baseAPI } from "../lib/axios";

export const getSurahs = async () => {
	try {
		const { data: res } = await baseAPI.get("/quran/ar.muyassar");
		return res.data;
	} catch (error) {
		throw { error };
	}
};
