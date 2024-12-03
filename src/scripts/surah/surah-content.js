import { surahs } from "../auth/constants";
import { getSurah } from "../actions/surah";

const content = document.querySelector("#content-surah");

export const getSurahContent = async (surahNumber) => {
	const surah = surahs.find((surah) => surah.number == surahNumber);
	const surahData = await getSurah(surah.number);
	const surahStartPage = surahData.ayahs[0].page;
	console.log(surahData.ayahs);
	content.innerHTML = surahData.ayahs
		.filter((ayah) => ayah.page <= surahStartPage)
		.map(
			(ayah) =>
				`${ayah.text}<div class="aya-number">${ayah.numberInSurah}</div>`,
		)
		.join("");
};
