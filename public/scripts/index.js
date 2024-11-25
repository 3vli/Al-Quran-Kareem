import { supabase } from "./supabase";

document.addEventListener("DOMContentLoaded", async () => {
	const { data } = await supabase.auth.getUser();

	if (!data.user) {
		window.location.href = "/pages/login.html";
	}
});
// عند الضغط على المستخدم
const menuButton = document.getElementById('user-menu-btn');
const dropdown = document.getElementById('user-menu-dropdown');

menuButton.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// عند الضغط خارج القائمة، يتم إغلاقها
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

// زر تسجيل الخروج
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', async () => {
  alert('Logging out...');
  await supabase.auth.signOut(); // تسجيل الخروج من Supabase
  window.location.href = 'pages/login.html'; // توجيه المستخدم إلى صفحة تسجيل الدخول
});
