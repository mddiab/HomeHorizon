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

$(document).ready(function () {
    $.getJSON("faq-data.json", function (data) {
        data.faq.forEach((item) => {
            let faqItem = `
                <button class="accordion">${item.Q}</button>
                <div class="panel">
                    <p>${item.A}</p>
                </div>
            `;
            $('#faq').append(faqItem);
        });

        $(document).on('click', '.accordion', function () {
            $(this).toggleClass('active');
            let panel = $(this).next('.panel');
            panel.slideToggle();
        });
    });
});

let menuToggle = document.getElementById('menuToggle');
let navCenter = document.querySelector('.nav-center');

menuToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
});