document.getElementById("show-signup").onclick = () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
};

document.getElementById("show-login").onclick = () => {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
};
  