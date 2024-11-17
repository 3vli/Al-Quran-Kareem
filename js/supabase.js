import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// أدخل بيانات Supabase الخاصة بك هنا
const supabaseUrl = 'https://jetgtarotmukqnrlbfla.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldGd0YXJvdG11a3FucmxiZmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MjgyODMsImV4cCI6MjA0NzQwNDI4M30.WnWkc769smobBqAyw16rJWWsOVP2dyKKZc140t6tXkM';
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Logged in successfully!');
      window.location.href = 'main.html';
      console.log(data); // يمكنك تخزين معلومات الجلسة إذا لزم الأمر
    }
});
  
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
  
    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // إرسال البيانات إلى Supabase
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    }, {
      data: { name: name } // تخزين الاسم في metadata
    });
  
    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      alert('Registered successfully!');
      console.log(data); // يمكنك التعامل مع بيانات المستخدم هنا
    }
  });
  
