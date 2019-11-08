
export default class selectionSort {
        
        constructor(Array) {
            this.array = Array.array;
            this.min = 0;
            this.tempmin = 0;
        }
        
        swap(firstIndex, secondIndex){
            [this.array[firstIndex], this.array[secondIndex]] = [this.array[secondIndex], this.array[firstIndex]];
            /*
            let temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
            */
        }
        
        sort(){
            let len = this.array.length;
            let min;

            for (let i = 0; i < len; i++){
                //set minimum to this position
                min = i;

                //check the rest of the array to see if anything is smaller
                for (let j = i + 1; j < len; j++){
                    if (this.array[j] < this.array[min]){
                        min = j;
                    }
                }

                //if the minimum isn't in the position, swap it
                if (i != min){
                    this.swap(i, min);
                }
            }
        }
        
        sortStep(){ 
            //check the rest of the array to see if anything is smaller
            this.tempmin = this.min;
            for (let j = this.min + 1; j < this.array.length; j++){
                if (this.array[j].value < this.array[this.tempmin].value){
                    this.tempmin = j;
                }
            }

            //if the minimum isn't in the position, swap it
            if (this.min != this.tempmin){
                this.swap(this.min, this.tempmin);
                //this.tempmin = 0;
            }
            if (this.min < this.array.length) {
                this.min++;
            }
        }
}

