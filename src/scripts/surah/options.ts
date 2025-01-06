import { surahs } from "../auth/constants";
import { redirect } from "../lib/redirect";
import { getSearchQuery } from "../lib/get-search-query";
import { getSurahContent } from "./surah-content";

const selectElement = document.getElementById("juz-opt") as HTMLSelectElement;
const selectElementsurah = document.getElementById(
	"surat-opt",
) as HTMLSelectElement;
const params = getSearchQuery();
const querySurah = params.get("surahNumber");
const queryJuz = params.get("juzNumber");
getSurahContent(parseInt(querySurah || "0"));

const setOptions = (
	ignore: "surahs" | "juzs" | undefined,
	juz: string | null,
) => {
	const loapSurahs = juz
		? surahs.filter((surah) => surah.juz.includes(Number(juz)))
		: surahs;
	const querySurahNum = parseInt(querySurah || "0");

	if (ignore !== "surahs") {
		for (let y = 0; y < loapSurahs.length; y++) {
			const currentSurah = loapSurahs[y];
			const optionsurah = document.createElement("option");
			optionsurah.text = currentSurah.name;
			optionsurah.value = currentSurah.name;
			optionsurah.defaultSelected = currentSurah.number == querySurahNum;
			optionsurah.setAttribute("surah-number", String(currentSurah.number));
			selectElementsurah?.appendChild(optionsurah);
		}
	}

	if (ignore !== "juzs") {
		for (let i = 1; i <= 30; i++) {
			const option = document.createElement("option");
			option.text = `جزء ${i}`;
			const stringI = String(i);
			option.value = stringI;
			option.defaultSelected = i === Number(queryJuz || "0");
			option.setAttribute("juz-number", stringI);
			selectElement?.appendChild(option);
		}
	}

	return { surahOptions: loapSurahs };
};

setOptions(undefined, queryJuz);

const optionsChangeHandler = (
	element: HTMLSelectElement,
	queryName: string,
	attributeName: string,
) => {
	const chosenOption = element.selectedOptions[0];
	const optionSurahNumber = chosenOption.getAttribute(attributeName);
	params.set(queryName, String(optionSurahNumber || "0"));

	params.delete("pageNumber");
	redirect(`?${params.toString()}`);
	return optionSurahNumber;
};

selectElementsurah?.addEventListener("change", () => {
	const surahNumber = optionsChangeHandler(
		selectElementsurah,
		"surahNumber",
		"surah-number",
	);
	getSurahContent(parseInt(surahNumber || "0"));
});

selectElement?.addEventListener("change", () => {
	const juzNumber = optionsChangeHandler(
		selectElement,
		"juzNumber",
		"juz-number",
	);
	if (selectElementsurah) selectElementsurah.innerHTML = "";
	console.log(juzNumber);
	const { surahOptions } = setOptions(
		"juzs",
		juzNumber === "0" ? null : juzNumber ?? null,
	);
	params.set("surahNumber", String(surahOptions[0].number));
	redirect(`?${params.toString()}`);
	console.log(surahOptions[0].number);
	getSurahContent(surahOptions[0].number);
});
