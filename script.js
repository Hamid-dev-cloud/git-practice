
const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", () => {
    message.textContent = "Welcome to my portfolio!";
});
