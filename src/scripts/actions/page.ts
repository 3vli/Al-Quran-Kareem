import { baseAPI } from "../lib/axios";

type Surah = {
	number: number;
	name: string;
	englishName: string;
	englishNameTranslation: string;
	revelationType: string;
	numberOfAyahs: number;
};

type Ayah = {
	number: number;
	text: string;
	surah: Surah;
	numberInSurah: number;
	juz: number;
	manzil: number;
	page: number;
	ruku: number;
	hizbQuarter: number;
	sajda: boolean;
};

type QuranPageResponse = {
	number: number;
	ayahs: Ayah[];
	surahs: Record<number, Surah>;
	edition: {
		identifier: string;
		language: string;
		name: string;
		englishName: string;
		format: string;
		type: string;
		direction: string;
	};
};

export const getPage = async (
	pageNumber: string | null,
): Promise<QuranPageResponse> => {
	try {
		const { data } = await baseAPI.get<QuranPageResponse>(
			`/page/${pageNumber ?? 1}`,
		);
		return data;
	} catch (error) {
		throw error; // Throwing the actual error object is more standard.
	}
};
