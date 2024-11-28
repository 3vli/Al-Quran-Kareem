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
