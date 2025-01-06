import { surahs } from "../auth/constants";
import { getSurah } from "../actions/surah";
import { getPage } from "../actions/page";
import { getSearchQuery } from "../lib/get-search-query";
import { redirect } from "../lib/redirect";

const content = document.querySelector("#content-surah");
const params = getSearchQuery();
const pageNumber = params.get("pageNumber");
const surahQueryNumber = params.get("surahNumber");

export const getSurahContent = async (surahNumber = surahQueryNumber) => {
	const surah = surahs.find(
		(surah) =>
			surah.number ==
			surahNumber,
	);
	const surahData = await getSurah(
		surah.number,
		1,
	);
	const surahStartPage = surahData.ayahs[0].page;
	if (!pageNumber) {
		params.set(
			"pageNumber",
			surahStartPage,
		);
		redirect(
			`?${params.toString()}`,
		);
	}

	const pageData = await getPage(pageNumber);
	console.log(
		"na7t",
		pageData.ayahs
			.filter(
				(
					ayah,
				) =>
					ayah.page <=
					pageNumber,
			)
			.map(
				(
					ayah,
				) =>
					`${ayah.text}<div class="aya-number">${ayah.numberInSurah}</div>`,
			)
			.join(
				"",
			),
	);
	content.innerHTML = "";
	content.innerHTML = pageData.ayahs
		.filter(
			(
				ayah,
			) =>
				ayah.page <=
				pageNumber,
		)
		.map(
			(
				ayah,
			) =>
				`${ayah.text}<div class="aya-number">${ayah.numberInSurah}</div>`,
		)
		.join("");
};
