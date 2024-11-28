import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (data.user && window.location.pathname !== "/") {
		window.location.href = "/";
	}
});

const togglePassword = document.querySelector(".fa-eye");
const passwordInput = document.querySelector('input[type="password"]');

togglePassword.addEventListener("click", function () {
	const type =
		passwordInput.getAttribute("type") === "password"
			? "text"
			: "password";
	passwordInput.setAttribute("type", type);
	this.classList.toggle("fa-eye-slash");
});
