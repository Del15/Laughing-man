const SQUARE_COUNT = 10;
const SPEED = 5;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', ()=>{
    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click", ()=>{
        alert("OMG YOU CAUGHT ME!");
    });

    // this changes the square to a random color on hover
    squareElement.addEventListener("mouseover", ()=>{
        squareElement.style.backgroundColor = getRandomColor();
    });

    let box = document.querySelector("#box");

    for(let i = 0;i<SQUARE_COUNT;i++)
    {
        //create the square
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';
        box.appendChild(square);

        // this changes the imagine on hover and goes back when mouse is out
        square.addEventListener("mouseover", ()=>{
            square.src= "orochimaru_50x50.jpg";
        });

        square.addEventListener("mouseout", ()=>{
            square.src= "laughing_man.jpg";
        });
        box.appendChild(square);
    }
    let allSquares = box.children;
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function (element, index) {
        var dx = SPEED * Math.random() * 2 - 1;
        var dy = SPEED * Math.random() * 2 - 1;
        setInterval(() => {
            let currentLeft = parseFloat(element.style.left) || 225;
            let currentTop = parseFloat(element.style.top) || 175;
            if (currentLeft >= 450 || currentLeft <= 0) {
                dx *= -1;
                element.style.borderColor = getRandomColor();
            }
            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getRandomColor();
            }
            element.style.left = (currentLeft + dx) + "px";
            element.style.top = (currentTop + dy) + "px";
        }, TIMER_SPEED);
    });
    
    
});

function getRandomColor() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}