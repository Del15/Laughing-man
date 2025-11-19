var squareCount = 3;

document.addEventListener("DOMContentLoaded", () => {
    let squareElement = document.getElementById("square");
    squareElement.addEventListener("click", function() {
        alert("Square clicked!");
    });



let box = document.querySelector("#box");

for (let i = 0; i < squareCount; i++) {
    let square = document.createElement("img");
    square.src = "LaughingMan.jpg";
    square.alt = "catch the laughing man";
    square.className = "square";
    box.appendChild(square);



}

let allSquares = box.children;
let squareArray = Array.from(children);
squareArray.forEach(function(element,index){
    var dx= SPEED * (Math.random()*2-1);
    var dy= SPEED * (Math.random()*2-1);

});

});
