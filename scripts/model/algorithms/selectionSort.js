
export default class selectionSort {
        
        constructor(array) {
            this.array = array;
            this.min = 0;
        }
        
        swap(array, firstIndex, secondIndex){
            let temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
        }
        
        sort(){
            let len = this.array.length;
            let min;

            for (i = 0; i < len; i++){
                //set minimum to this position
                min = i;

                //check the rest of the array to see if anything is smaller
                for (j = i + 1; j < len; j++){
                    if (this.array[j] < this.array[min]){
                        min = j;
                    }
                }

                //if the minimum isn't in the position, swap it
                if (i != min){
                    swap(this.array, i, min);
                }
            }
        }
        
        sortStep(){
            let len = this.array.length;
            let tempmin;
            
            //check the rest of the array to see if anything is smaller
            for (j = this.min + 1; j < len; j++){
                if (this.array[j] < this.array[min]){
                    tempmin = j;
                }
            }

            //if the minimum isn't in the position, swap it
            if (this.min != tempmin){
                swap(this.array, this.min, tempmin);
            }
        }
}

