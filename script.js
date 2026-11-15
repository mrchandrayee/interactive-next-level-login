const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const loginCard = document.getElementById("loginCard");
const successCard = document.getElementById("successCard");

togglePassword.addEventListener("click", () => {
  const showing = password.type === "password";
  password.type = showing ? "text" : "password";
  togglePassword.setAttribute("aria-label", showing ? "Hide password" : "Show password");
  togglePassword.setAttribute("aria-pressed", String(showing));
});

document.getElementById("forgot").addEventListener("click", () => {
  message.textContent = email.value.trim()
    ? `Password reset requested for ${email.value.trim()}. Connect a real reset service to send the email.`
    : "Enter your email address first to request a password reset.";
  email.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  if (!email.validity.valid || !email.value.trim()) {
    message.textContent = "Please enter a valid email address.";
    email.focus();
    return;
  }
  if (password.value.length < 6) {
    message.textContent = "Password must contain at least 6 characters.";
    password.focus();
    return;
  }

  // Front-end demo only: replace this section with your real authentication API.
  loginCard.hidden = true;
  successCard.hidden = false;
});

document.getElementById("backButton").addEventListener("click", () => {
  successCard.hidden = true;
  loginCard.hidden = false;
  password.value = "";
  message.textContent = "";
});
