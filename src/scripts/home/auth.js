import { supabase } from "/src/scripts/lib/supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();
	if (!data.user && window.location.pathname !== "/login") {
		window.location.href = "/login";
	}
});

const logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", async () => {
	alert("Logging out...");
	await supabase.auth.signOut();
	window.location.href = "//login";
});
