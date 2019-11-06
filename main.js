import Array from './model/Array.js'

let width = 1800;
let height = 600;

let sortingCanvas = document.getElementById("sortingCanvas");
let context = sortingCanvas.getContext("2d");
context.translate(0, sortingCanvas.height);
context.scale(1, -1);
let array = new Array(300);
console.log();


function drawArray(array) {
    //console.log(array.array.length);
    for (let i = 0; i < array.array.length; i++) {
        //console.log(array.array[i]);
        drawObject(array.array[i], array.array.length, i);
    }
}

function drawObject(object, size, xpos) {
    context.fillStyle = object.color;
    let dx = width / size;
    let dy = (object.value + 1) / size * height;
    let x = xpos * dx;
    context.fillRect(x,0,dx,dy);
}

drawArray(array);