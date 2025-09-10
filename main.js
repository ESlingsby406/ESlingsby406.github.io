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
    myHeading.textContent = `My website is pretty mint, ${myName}`;
}