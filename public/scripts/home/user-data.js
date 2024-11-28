import { supabase } from "../../../lib/supabase";

const asyncCode = async () => {
	const { data } = await supabase.auth.getUser();
	const elements = document.querySelectorAll("[data-user]");

	elements.forEach((element) => {
		const attr = element.getAttribute("data-user");
		element.innerHTML = data.user.user_metadata[attr];
	});
};

asyncCode();
