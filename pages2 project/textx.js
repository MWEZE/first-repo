document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
    } else {
        message.style.color = "limegreen";
        message.textContent = "Registration successful!";
    }
});
