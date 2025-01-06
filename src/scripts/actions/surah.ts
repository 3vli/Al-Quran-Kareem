import { baseAPI } from "../lib/axios";

export const getSurahs = async () => {
	try {
		const { data: res } = await baseAPI.get("/quran/ar.muyassar");
		return res.data;
	} catch (error) {
		throw { error };
	}
};

export const getSurah = async (surahNumber: number, limit: number) => {
	try {
		const { data: res } = await baseAPI.get(
			`/surah/${surahNumber}${limit ? `?offset=${limit}&limit=${limit}` : ""}`,
		);
		return res.data;
	} catch (error) {
		throw { error };
	}
};
