const myImage = document.querySelector("img");

// switches between images when clicked //
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sunrise-image.jpg") {
        myImage.setAttribute("src", "images/tiger-image.jpg");
    } else {
        myImage.setAttribute("src", "images/sunrise-image.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// gets user to enter their name and stores it in a variable //
function setUserName() {
    const myName = prompt("please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my CS website, ${myName}`;
}

//initialisation code - runs when page first loads to start program//
//sets the name in intro message to the inputted name//
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my CS website, ${storedName}`;
}

//adds a click feature to allow the user to enter another name if they want//
myButton.addEventListener("click", () => {
    setUserName();
});