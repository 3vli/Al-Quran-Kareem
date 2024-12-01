import { surahs } from "../auth/constants";

const selectElement = document.getElementById("juz-opt");
const selectElementsurah = document.getElementById("surat-opt");

if (selectElement && selectElementsurah) {
	if (typeof surahs !== "undefined" && Array.isArray(surahs)) {
		for (let y = 0; y < surahs.length; y++) {
			const optionsurah = document.createElement("option");
			optionsurah.text = surahs[y].name;
			optionsurah.value = surahs[y].name;
			selectElementsurah.appendChild(optionsurah);
		}
	}

	for (let i = 1; i <= 30; i++) {
		const option = document.createElement("option");
		option.text = `جزء ${i}`;
		option.value = i;
		selectElement.appendChild(option);
	}
}
