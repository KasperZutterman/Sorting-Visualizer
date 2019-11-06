import Object from './Object.js'

export default class Array {
        
        constructor(size) {
            this.array = [];
            this.newArray(size);
            this.shuffleArray();
        }
        
        newArray(size) {
            for (let i = 0; i < size; i++) {
                this.array.push(new Object(i));
            }
        }
        
        shuffleArray() { 
            for (let i = this.array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
            }
        }
}


