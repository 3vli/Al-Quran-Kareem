import { supabase } from "/lib/supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();
	if (!data.user && window.location.pathname !== "/pages/login.html") {
		window.location.href = "/pages/login.html";
	}
});

const logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", async () => {
	alert("Logging out...");
	await supabase.auth.signOut();
	window.location.href = "/pages/login.html";
});
