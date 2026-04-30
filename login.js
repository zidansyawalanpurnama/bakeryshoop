// default akun
if (!localStorage.getItem("user")) {
    localStorage.setItem("user", "kelompok3");
    localStorage.setItem("pass", "kelompok3");
}

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function register() {
    let user = document.getElementById("reg-user").value;
    let pass = document.getElementById("reg-pass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    document.getElementById("msg").innerText = "Akun berhasil dibuat!";
    showLogin();
}

function login() {
    let user = document.getElementById("login-user").value;
    let pass = document.getElementById("login-pass").value;

    let u = localStorage.getItem("user");
    let p = localStorage.getItem("pass");

    if (user === u && pass === p) {
        localStorage.setItem("login", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("msg").innerText = "Login gagal!";
    }
}