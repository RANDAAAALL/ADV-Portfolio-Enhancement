const circleBtn = document.querySelector(".circle");
const body = document.body;
const circleOverlay = document.querySelector(".light-dark-mode-container");
const Links = document.querySelectorAll("a");
const desc1 = document.querySelector(".description-1");
const desc2 = document.querySelector(".description-2");
const menuBtn = document.querySelector("li:nth-child(5)");
const navbarContainer = document.querySelector(".navbar-container");

const states = [
    {
        left: "25%", 
        circleColor: "white",
        bodyColor: "black",
        textColor: "white",
        borderColor: "white",
        desc2Color: "darkgray"
    },
    {
        left: "50%", 
        circleColor: "black",
        bodyColor: "#c0c0c0",
        textColor: "black",
        borderColor: "black",
        desc2Color: "black"
    },
    {
        left: "75%", 
        circleColor: "red",
        bodyColor: "violet",
        textColor: "red",
        borderColor: "red",
        desc2Color: "red"
    }
];

let currentStateIndex = 0;

function circleButtonHandler() {

    currentStateIndex = (currentStateIndex + 1) % states.length;
    const state = states[currentStateIndex];

    circleBtn.style.left = state.left;
    circleBtn.style.backgroundColor = state.circleColor;
    body.style.backgroundColor = state.bodyColor;
    Links.forEach(link => link.style.color = state.textColor);
    desc1.style.color = state.textColor;
    desc2.style.color = state.desc2Color;
    circleOverlay.style.borderColor = state.borderColor;
}

function sideBarHandler() {
    menuBtn.classList.toggle("active");
    navbarContainer.classList.toggle("active");   
}

menuBtn.addEventListener("click", sideBarHandler);
circleBtn.addEventListener("click", circleButtonHandler);
