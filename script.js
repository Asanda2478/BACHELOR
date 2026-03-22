function login() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("studentName", name);
    window.location.href = "dashboard.html";
}

function loadDashboard() {
    let name = localStorage.getItem("studentName");

    if(name) {
        document.getElementById("welcome").innerText =
            "Welcome " + name + " 👨‍💻";
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
