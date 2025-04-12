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