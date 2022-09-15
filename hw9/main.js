window.onload = function() { 
    circle.onclick = removeCircle; 
}

let circle = document.querySelector('.circle');
let container = document.querySelector('.container');

container.append(circle);

function growCircleBy10px() {
    setInterval(function() {
        let circleWidth = circle.offsetWidth; 
        circleWidth += 10;
        circle.style.width = circleWidth;
        let circleHeight = circle.offsetHeight; 
        circleHeight += 10;
        circle.style.height = circleHeight;
    }, 250);
}

function removeCircle () {
    circle.remove();
}

growCircleBy10px();
