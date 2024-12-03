import { surahs } from "../auth/constants";
import { redirect } from "../lib/redirect";
import { getSearchQuery } from "../lib/get-search-query";
import { getSurahContent } from "./surah-content";

const selectElement = document.getElementById("juz-opt");
const selectElementsurah = document.getElementById("surat-opt");
const params = getSearchQuery();
const querySurah = params.get("surahNumber");
const queryJuz = params.get("juzNumber");
getSurahContent(querySurah);

const setOptions = (ignore, juz) => {
	const loapSurahs = juz
		? surahs.filter((surah) => surah.juz.includes(Number(juz)))
		: surahs;

	if (ignore !== "surahs") {
		for (let y = 0; y < loapSurahs.length; y++) {
			const currentSurah = loapSurahs[y];
			const optionsurah = document.createElement("option");
			optionsurah.text = currentSurah.name;
			optionsurah.value = currentSurah.name;
			optionsurah.defaultSelected = currentSurah.number == querySurah;
			optionsurah.setAttribute("surah-number", currentSurah.number);
			selectElementsurah.appendChild(optionsurah);
		}
	}

	if (ignore !== "juzs") {
		for (let i = 1; i <= 30; i++) {
			const option = document.createElement("option");
			option.text = `جزء ${i}`;
			option.value = i;
			option.defaultSelected = i == queryJuz;
			option.setAttribute("juz-number", i);
			selectElement.appendChild(option);
		}
	}

	return { surahOptions: loapSurahs };
};

setOptions(undefined, queryJuz);

const optionsChangeHandler = (element, queryName, attributeName) => {
	const chosenOption = element.selectedOptions[0];
	const optionSurahNumber = chosenOption.getAttribute(attributeName);
	params.set(queryName, optionSurahNumber);

	redirect(`?${params.toString()}`);
	return optionSurahNumber;
};

selectElementsurah.addEventListener("change", () => {
	const surahNumber = optionsChangeHandler(
		selectElementsurah,
		"surahNumber",
		"surah-number",
	);
	getSurahContent(surahNumber);
});

selectElement.addEventListener("change", () => {
	const juzNumber = optionsChangeHandler(
		selectElement,
		"juzNumber",
		"juz-number",
	);
	selectElementsurah.innerHTML = "";
	console.log(juzNumber);
	const { surahOptions } = setOptions(
		"juzs",
		juzNumber === "0" ? undefined : juzNumber,
	);
	params.set("surahNumber", surahOptions[0].number);
	getSurahContent(surahOptions[0].number);
	redirect(`?${params.toString()}`);
});
