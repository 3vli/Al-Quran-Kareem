import { supabase } from "./supabase";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (!data.user && window.location.pathname !== "/login.html") {
		window.location.href = "/login.html";
	}
});

const menuButton = document.getElementById("user-menu-btn");
const dropdown = document.getElementById("user-menu-dropdown");

menuButton.addEventListener("click", () => {
	dropdown.style.display =
		dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
	if (
		!menuButton.contains(event.target) &&
		!dropdown.contains(event.target)
	) {
		dropdown.style.display = "none";
	}
});

const logoutButton = document.getElementById("logout-btn");
logoutButton.addEventListener("click", async () => {
	alert("Logging out...");
	await supabase.auth.signOut();
	window.location.href = "/login.html";
});

const surahs = [
	{ name: "الفاتحة", type: "Makiyyah", ayat: 7 },
	{ name: "البقرة", type: "Madaniyyah", ayat: 286 },
	{ name: "آل عمران", type: "Madaniyyah", ayat: 200 },
	{ name: "النساء", type: "Madaniyyah", ayat: 176 },
	{ name: "المائدة", type: "Madaniyyah", ayat: 120 },
	{ name: "الأنعام", type: "Makiyyah", ayat: 165 },
	{ name: "الأعراف", type: "Makiyyah", ayat: 206 },
	{ name: "الأنفال", type: "Madaniyyah", ayat: 75 },
	{ name: "التوبة", type: "Madaniyyah", ayat: 129 },
	{ name: "يونس", type: "Makiyyah", ayat: 109 },
	{ name: "هود", type: "Makiyyah", ayat: 123 },
	{ name: "يوسف", type: "Makiyyah", ayat: 111 },
	{ name: "الرعد", type: "Madaniyyah", ayat: 43 },
	{ name: "إبراهيم", type: "Makiyyah", ayat: 52 },
	{ name: "الحجر", type: "Makiyyah", ayat: 99 },
	{ name: "النحل", type: "Makiyyah", ayat: 128 },
	{ name: "الإسراء", type: "Makiyyah", ayat: 111 },
	{ name: "الكهف", type: "Makiyyah", ayat: 110 },
	{ name: "مريم", type: "Makiyyah", ayat: 98 },
	{ name: "طه", type: "Makiyyah", ayat: 135 },
	{ name: "الأنبياء", type: "Makiyyah", ayat: 112 },
	{ name: "الحج", type: "Madaniyyah", ayat: 78 },
	{ name: "المؤمنون", type: "Makiyyah", ayat: 118 },
	{ name: "النور", type: "Madaniyyah", ayat: 64 },
	{ name: "الفرقان", type: "Makiyyah", ayat: 77 },
	{ name: "الشعراء", type: "Makiyyah", ayat: 227 },
	{ name: "النمل", type: "Makiyyah", ayat: 93 },
	{ name: "القصص", type: "Makiyyah", ayat: 88 },
	{ name: "العنكبوت", type: "Makiyyah", ayat: 69 },
	{ name: "الروم", type: "Makiyyah", ayat: 60 },
	{ name: "لقمان", type: "Makiyyah", ayat: 34 },
	{ name: "السجدة", type: "Makiyyah", ayat: 30 },
	{ name: "الأحزاب", type: "Madaniyyah", ayat: 73 },
	{ name: "سبأ", type: "Makiyyah", ayat: 54 },
	{ name: "فاطر", type: "Makiyyah", ayat: 45 },
	{ name: "يس", type: "Makiyyah", ayat: 83 },
	{ name: "الصافات", type: "Makiyyah", ayat: 182 },
	{ name: "ص", type: "Makiyyah", ayat: 88 },
	{ name: "الزمر", type: "Makiyyah", ayat: 75 },
	{ name: "غافر", type: "Makiyyah", ayat: 85 },
	{ name: "فصلت", type: "Makiyyah", ayat: 54 },
	{ name: "الشورى", type: "Makiyyah", ayat: 53 },
	{ name: "الزخرف", type: "Makiyyah", ayat: 89 },
	{ name: "الدخان", type: "Makiyyah", ayat: 59 },
	{ name: "الجاثية", type: "Makiyyah", ayat: 37 },
	{ name: "الأحقاف", type: "Makiyyah", ayat: 35 },
	{ name: "محمد", type: "Madaniyyah", ayat: 38 },
	{ name: "الفتح", type: "Madaniyyah", ayat: 29 },
	{ name: "الحجرات", type: "Madaniyyah", ayat: 18 },
	{ name: "ق", type: "Makiyyah", ayat: 45 },
	{ name: "الذاريات", type: "Makiyyah", ayat: 60 },
	{ name: "الطور", type: "Makiyyah", ayat: 49 },
	{ name: "النجم", type: "Makiyyah", ayat: 62 },
	{ name: "القمر", type: "Makiyyah", ayat: 55 },
	{ name: "الرحمن", type: "Madaniyyah", ayat: 78 },
	{ name: "الواقعة", type: "Makiyyah", ayat: 96 },
	{ name: "الحديد", type: "Madaniyyah", ayat: 29 },
	{ name: "المجادلة", type: "Madaniyyah", ayat: 22 },
	{ name: "الحشر", type: "Madaniyyah", ayat: 24 },
	{ name: "الممتحنة", type: "Madaniyyah", ayat: 13 },
	{ name: "الصف", type: "Madaniyyah", ayat: 14 },
	{ name: "الجمعة", type: "Madaniyyah", ayat: 11 },
	{ name: "المنافقون", type: "Madaniyyah", ayat: 11 },
	{ name: "التغابن", type: "Madaniyyah", ayat: 18 },
	{ name: "الطلاق", type: "Madaniyyah", ayat: 12 },
	{ name: "التحريم", type: "Madaniyyah", ayat: 12 },
	{ name: "الملك", type: "Makiyyah", ayat: 30 },
	{ name: "القلم", type: "Makiyyah", ayat: 52 },
	{ name: "الحاقة", type: "Makiyyah", ayat: 52 },
	{ name: "المعارج", type: "Makiyyah", ayat: 44 },
	{ name: "نوح", type: "Makiyyah", ayat: 28 },
	{ name: "الجن", type: "Makiyyah", ayat: 28 },
	{ name: "المزمل", type: "Makiyyah", ayat: 20 },
	{ name: "المدثر", type: "Makiyyah", ayat: 56 },
	{ name: "القيامة", type: "Makiyyah", ayat: 40 },
	{ name: "الإنسان", type: "Madaniyyah", ayat: 31 },
	{ name: "المرسلات", type: "Makiyyah", ayat: 50 },
	{ name: "النبأ", type: "Makiyyah", ayat: 40 },
	{ name: "النازعات", type: "Makiyyah", ayat: 46 },
	{ name: "عبس", type: "Makiyyah", ayat: 42 },
	{ name: "التكوير", type: "Makiyyah", ayat: 29 },
	{ name: "الانفطار", type: "Makiyyah", ayat: 19 },
	{ name: "المطففين", type: "Makiyyah", ayat: 36 },
	{ name: "الانشقاق", type: "Makiyyah", ayat: 25 },
	{ name: "البروج", type: "Makiyyah", ayat: 22 },
	{ name: "الطارق", type: "Makiyyah", ayat: 17 },
	{ name: "الأعلى", type: "Makiyyah", ayat: 19 },
	{ name: "الغاشية", type: "Makiyyah", ayat: 26 },
	{ name: "الفجر", type: "Makiyyah", ayat: 30 },
	{ name: "البلد", type: "Makiyyah", ayat: 20 },
	{ name: "الشمس", type: "Makiyyah", ayat: 15 },
	{ name: "الليل", type: "Makiyyah", ayat: 21 },
	{ name: "الضحى", type: "Makiyyah", ayat: 11 },
	{ name: "الشرح", type: "Makiyyah", ayat: 8 },
	{ name: "التين", type: "Makiyyah", ayat: 8 },
	{ name: "العلق", type: "Makiyyah", ayat: 19 },
	{ name: "القدر", type: "Makiyyah", ayat: 5 },
	{ name: "البينة", type: "Madaniyyah", ayat: 8 },
	{ name: "الزلزلة", type: "Madaniyyah", ayat: 8 },
	{ name: "العاديات", type: "Makiyyah", ayat: 11 },
	{ name: "القارعة", type: "Makiyyah", ayat: 11 },
	{ name: "التكاثر", type: "Makiyyah", ayat: 8 },
	{ name: "العصر", type: "Makiyyah", ayat: 3 },
	{ name: "الهمزة", type: "Makiyyah", ayat: 9 },
	{ name: "الفيل", type: "Makiyyah", ayat: 5 },
	{ name: "قريش", type: "Makiyyah", ayat: 4 },
	{ name: "الماعون", type: "Makiyyah", ayat: 7 },
	{ name: "الكوثر", type: "Makiyyah", ayat: 3 },
	{ name: "الكافرون", type: "Makiyyah", ayat: 6 },
	{ name: "النصر", type: "Madaniyyah", ayat: 3 },
	{ name: "المسد", type: "Makiyyah", ayat: 5 },
	{ name: "الإخلاص", type: "Makiyyah", ayat: 4 },
	{ name: "الفلق", type: "Makiyyah", ayat: 5 },
	{ name: "الناس", type: "Makiyyah", ayat: 6 },
];

const surahList = document.getElementById("surah-list");

surahs.forEach((surah, index) => {
	const card = document.createElement("div");
	card.className = "card";
	card.setAttribute("onclick", `showSurahSection(${index + 1})`);

	const cardNumber = document.createElement("div");
	cardNumber.className = "card-number";
	cardNumber.textContent = index + 1;

	const cardContent = document.createElement("div");
	cardContent.className = "card-content";

	const surahName = document.createElement("span");
	surahName.textContent = surah.name;

	const surahDetails = document.createElement("p");
	surahDetails.innerHTML = `<span>${surah.type}</span> - <span>${surah.ayat} Ayat</span>`;

	cardContent.appendChild(surahName);
	cardContent.appendChild(surahDetails);

	card.appendChild(cardNumber);
	card.appendChild(cardContent);

	surahList.appendChild(card);
});

function showSurahSection(surahNumber) {
	alert(`تم اختيار السورة رقم ${surahNumber}`);
}
