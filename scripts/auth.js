import { supabase } from "./supabase";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (data.user) {
		window.location.href = "/";
	}
});

const inputContainers = document.querySelectorAll(".input-container");

inputContainers.forEach((container) => {
	const button = container.querySelector(".icon");
	const input = container.querySelector("input");
	console.log(input);
	const icon = button.querySelector("i");
	let currentInputType = input.type;

	button.addEventListener("click", () => {
		currentInputType = currentInputType === "text" ? "password" : "text";
		input.setAttribute("type", currentInputType);
		icon.classList.toggle("fa-eye-slash");
	});
});
