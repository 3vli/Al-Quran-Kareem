import { supabase } from "./supabase";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (!data.user) {
		window.location.href = "/pages/login.html";
	}
});
