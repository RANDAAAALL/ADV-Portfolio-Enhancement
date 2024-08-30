const menuBtn = document.querySelector("li:nth-child(5)");
const navbarContainer = document.querySelector(".navbar-container");
const circleBtn = document.querySelector(".circle");
const body = document.body;
const circleOverlay = document.querySelector(".light-dark-mode-container");
const Links = document.querySelectorAll("a");
const Title = document.querySelector(".left-side-title");
const desc = document.querySelector(".description");
const overlay = document.querySelector(".overlay");

const states = [
    {
        left: "25%", 
        circleColor: "white",
        bodyColor: "black",
        textColor: "white",
        borderColor: "white",
        descColor: "darkgray"
    },
    {
        left: "50%", 
        circleColor: "black",
        bodyColor: "#c0c0c0",
        textColor: "black",
        borderColor: "black",
        descColor: "black"
    },
    {
        left: "75%", 
        circleColor: "red",
        bodyColor: "violet",
        textColor: "red",
        borderColor: "red",
        descColor: "red"
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
    Title.style.color = state.textColor;
    desc.style.color = state.descColor;
    circleOverlay.style.borderColor = state.borderColor;
}

circleBtn.addEventListener("click", circleButtonHandler);


function sideBarHandler(){
    menuBtn.classList.toggle("active");
    navbarContainer.classList.toggle("active");   
}


menuBtn.addEventListener("click", sideBarHandler);
cirlceBtn.addEventListener("click", circleButtonHandler);
