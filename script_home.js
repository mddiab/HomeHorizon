let toggleButton = document.getElementById('toggleModeBtn');
let body = document.body;
let locationcards = document.querySelectorAll(".location-card")
let sections = document.querySelectorAll(".section")

toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === '🌙') {
        DarkMode();
    } else {
        LightMode();
    }
});

function DarkMode() {
    toggleButton.textContent = '🌕';
    body.style.color = "white";
    
    for (let i = 0; i < locationcards.length; i++) {
        locationcards[i].style.background = 'linear-gradient(to bottom, #333333, #666666)';
    }
    
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.backgroundColor = 'black';
    }
}


function LightMode() {
    toggleButton.textContent = '🌙';
    body.style.color = "black";
    
    for (let i = 0; i < locationcards.length; i++) {
        locationcards[i].style.background = 'linear-gradient(to bottom, #f0f0f0, #d3d3d3)';
    }

    for (let i = 0; i < sections.length; i++) {
        sections[i].style.backgroundColor = '#fAf9f6';
    }
}
