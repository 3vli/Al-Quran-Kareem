import { supabase } from "../lib/supabase";

const form = document.getElementById("login-form");

form?.addEventListener("submit", async (e) => {
	e.preventDefault();

	const email = document.querySelector<HTMLInputElement>("#email")?.value;
	const password = document.querySelector<HTMLInputElement>("#password")?.value;

	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email ?? "",
			password: password ?? "",
		});

		if (error) {
			console.error("Error logging in:", error.message);
			alert("Login failed: " + error.message);
		} else {
			console.log("Login successful:", data);
			alert("Login successful!");
			window.location.href = "/";
		}
	} catch (err) {
		console.error("Unexpected error:", err);
		alert("An unexpected error occurred. Please try again.");
	}
});
