document.getElementById("show-signup").onclick = () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
};

document.getElementById("show-login").onclick = () => {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
};

function getUsers() {
    let users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function signup(fullName, email, password) {
    let users = getUsers();

    if (users.find(user => user.email === email)) {
        alert("User already exists!");
        return;
    }

    users.push({ fullName, email, password });
    saveUsers(users);
    alert("Signup successful! You can now log in.");

    document.getElementById("signup-form").reset();

    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function login(email, password) {
    let users = getUsers();
    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert("Login successful!");
        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        document.getElementById("login-form").reset();

        window.location.href = "../Home/home.html";
    } else {
        alert("Invalid email or password.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let email = loginForm.email.value.trim();
            let password = loginForm.password.value.trim();
            login(email, password);
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let fullName = signupForm.fullName.value.trim();
            let email = signupForm.email.value.trim();
            let password = signupForm.password.value.trim();
            signup(fullName, email, password);
        });
    }
});
