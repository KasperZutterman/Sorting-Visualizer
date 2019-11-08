import Array from './scripts/model/Array.js'
import ArrayView from './scripts/view/ArrayView.js'
import SelectionSort from './scripts/model/algorithms/SelectionSort.js'
import InsertionSort from './scripts/model/algorithms/InsertionSort.js'

let width = 1800;
let height = 600;

let sortingCanvas = document.getElementById("sortingCanvas");
let context = sortingCanvas.getContext("2d");
context.translate(0, sortingCanvas.height);
context.scale(1, -1);
let array = new Array(30);
console.log();


let arrayView = new ArrayView(array, sortingCanvas, width, height);

arrayView.drawArray();

//let sortAlgorithm = new SelectionSort(array);
let sortAlgorithm = new InsertionSort(array);

let btnStep = document.getElementById("btnStep");
btnStep.addEventListener("click", (e) => {
    sortAlgorithm.sortStep();
    //sortAlgorithm.sort();
    arrayView.drawArray();
});