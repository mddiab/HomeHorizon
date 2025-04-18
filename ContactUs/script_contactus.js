let toggleButton = document.getElementById('toggleModeBtn');
let body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleButton.textContent = '⏾';
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = '🔆';
    }
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        timestamp: new Date().toISOString()
    };

    let savedData = JSON.parse(localStorage.getItem("contactForms")) || [];

    savedData.push(formData);

    localStorage.setItem("contactForms", JSON.stringify(savedData));

    alert("Message sent successfully!");
    event.target.reset();
});

let loginSignupButton = document.querySelector('.auth-btn');
loginSignupButton.addEventListener('click', () => {
    window.location.href = '../Login/login.html';
});

let menuToggle = document.getElementById('menuToggle');
let navCenter = document.querySelector('.nav-center');

menuToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
});