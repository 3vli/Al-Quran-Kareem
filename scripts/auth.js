import { supabase } from "./supabase";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (data.user) {
		window.location.href = "/";
	}
});

const togglePassword = document.querySelector('.fa-eye');
const passwordInput = document.querySelector('input[type="password"]');

togglePassword.addEventListener('click', function () {
    // تغيير نوع المدخل بين password و text
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // تغيير أيقونة العين
    this.classList.toggle('fa-eye-slash');
});