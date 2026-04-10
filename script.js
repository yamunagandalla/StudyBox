
const siteName = "StudyBox";
let userRole = "Student";

console.log("Site:", siteName);
console.log("Role:", userRole);

function updateRole() {
    userRole = "Advanced Learner";
    document.getElementById("roleText").innerText = userRole;
}

// Trying to reassign const (will give error in console)
// siteName = "NewName";

// Function Declaration
function welcomeMessage(name) {
    return "Welcome " + name + " to StudyBox 🚀";
}

// Function Expression
const changeMessage = function () {
    document.getElementById("message").innerText = "Keep Learning Daily!";
};

// Arrow Function
const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
};


let student = {
    name: "Yam",
    course: "Cybersecurity",
    progress: 60,

    updateProgress: function () {
        this.progress += 10;
        document.getElementById("progressText").innerText = this.progress + "%";
    }
};

console.log(student);

function showStudent() {
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("studentCourse").innerText = student["course"];
}



function loginAlert() {
    alert("Login Successful!");
}

function confirmAction() {
    let result = confirm("Do you want to continue?");
    document.getElementById("confirmResult").innerText = result;
}

function askName() {
    let name = prompt("Enter your name:");
    document.getElementById("promptResult").innerText = name;
}



document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnClick").addEventListener("click", function () {
        document.getElementById("eventText").innerText = "Button Clicked!";
    });

    document.getElementById("hoverBox").addEventListener("mouseover", function () {
        this.style.background = "#00f5ff";
        this.style.color = "black";
    });

    document.getElementById("nameInput").addEventListener("input", function () {
        document.getElementById("liveText").innerText = this.value;
    });

});

