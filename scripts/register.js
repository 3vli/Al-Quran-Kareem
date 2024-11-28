import { supabase } from "/scripts/supabase.js";

const form = document.getElementById("register-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("reg-name");
    const email = formData.get("reg-email");
    const password = formData.get("reg-password");
    const confirmPassword = formData.get("reg-confirm-password");

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });

        console.log(error, supabase);

        if (error) {
            console.error("Error signing up:", error.message);
            alert("Registration error: " + error.message);
            return;
        }

        console.log("User registered successfully:", data);
        alert(
            "Registration successful! Please check your email for verification.",
        );
        setTimeout(() => {
            location.pathname = "/";
        }, 1000);
    } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
    }
});