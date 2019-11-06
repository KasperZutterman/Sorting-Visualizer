import Array from './scripts/model/Array.js'
import ArrayView from './scripts/view/ArrayView.js'

let width = 1800;
let height = 600;

let sortingCanvas = document.getElementById("sortingCanvas");
let context = sortingCanvas.getContext("2d");
context.translate(0, sortingCanvas.height);
context.scale(1, -1);
let array = new Array(300);
console.log();


let arrayView = new ArrayView(array, sortingCanvas, width, height);

arrayView.drawArray();