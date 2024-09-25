function connect() {
    let un = document.getElementById("login_password").value;
    let pw = document.getElementById("login_username").value;
    document.getElementById("login_display").innerText = "Username: " + un;
}