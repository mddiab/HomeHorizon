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

let loginSignupButton = document.querySelector('.auth-btn');
loginSignupButton.addEventListener('click', () => {
    window.location.href = '../Login/login.html';
});

let menuToggle = document.getElementById('menuToggle');
let navCenter = document.querySelector('.nav-center');

menuToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
});