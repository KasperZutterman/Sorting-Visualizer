import Array from './scripts/model/Array.js'
import ArrayView from './scripts/view/ArrayView.js'
import SelectionSort from './scripts/model/algorithms/SelectionSort.js'
import InsertionSort from './scripts/model/algorithms/InsertionSort.js'
import BubbleSort from './scripts/model/algorithms/BubbleSort.js'
import HeapSort from './scripts/model/algorithms/HeapSort.js'
import QuickSort from './scripts/model/algorithms/QuickSort.js'

let width = 1800;
let height = 600;

let sortingCanvas = document.getElementById("sortingCanvas");
let context = sortingCanvas.getContext("2d");
context.translate(0, sortingCanvas.height);
context.scale(1, -1);
let array = new Array(30);

let arrayView = new ArrayView(array, sortingCanvas, width, height);

arrayView.drawArray();

//let sortAlgorithm = new SelectionSort(array);
//let sortAlgorithm = new InsertionSort(array);
//let sortAlgorithm = new BubbleSort(array);
//let sortAlgorithm = new HeapSort(array);
let sortAlgorithm;// = new QuickSort(array);

let btnStep = document.getElementById("btnStep");
btnStep.addEventListener("click", (e) => {
    sortStep();
});

let interval;

let btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener("click", (e) => {
    interval = setInterval(sortStep, 500);
    btnPlay.disabled = true;
    btnPause.disabled = false;
    btnStep.disabled = true;
});

let btnPause = document.getElementById("btnPause");
btnPause.addEventListener("click", (e) => {
    clearInterval(interval);
    btnPause.disabled = true;
    btnPlay.disabled = false;
    btnStep.disabled = false;
});

let algoSelect = document.getElementById("algoSelect");
algoSelect.addEventListener("change", (e) => {
    let algo = algoSelect.options[algoSelect.selectedIndex].value;
    setAlgorithm(algo);
});

function sortStep() {
    sortAlgorithm.sortStep();
    //sortAlgorithm.sort();
    arrayView.drawArray();
}

function init() {
    btnPause.disabled = true;
    btnPlay.disabled = false;
    setAlgorithm("insertion");
}

function setAlgorithm(algo) {
    if (algo === "insertion") {
        sortAlgorithm = new SelectionSort(array);
    }
    else if (algo === "selection") {
        sortAlgorithm = new InsertionSort(array);
    }
    else if (algo === "bubble") {
        sortAlgorithm = new BubbleSort(array);
    }
    else if (algo === "heap") {
        sortAlgorithm = new HeapSort(array);
    }
    else if (algo === "quick") {
        sortAlgorithm = new QuickSort(array);
    }
}
init();