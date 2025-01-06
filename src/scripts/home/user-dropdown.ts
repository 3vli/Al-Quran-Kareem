const menuButton = document.getElementById("user-menu-btn");
const dropdown = document.getElementById("user-menu-dropdown");

menuButton?.addEventListener("click", () => {
	if (dropdown)
		dropdown.style.display =
			dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
	if (!dropdown) return;
	if (
		!menuButton?.contains(event.target as Node) &&
		!dropdown?.contains(event.target as Node)
	) {
		dropdown.style.display = "none";
	}
});
