
export default class HeapSort {
        
        constructor(Array) {
            this.array = Array.array;
            this.max = 0;
            this.i = Math.floor(this.array.length / 2 - 1);
            this.k = this.array.length - 1;
        }
        
        swap(firstIndex, secondIndex){
            [this.array[firstIndex], this.array[secondIndex]] = [this.array[secondIndex], this.array[firstIndex]];
        }
        
        sort(){
            let i = Math.floor(this.array.length / 2 - 1);
            let k = this.array.length - 1;
            
            while (i >= 0) {
                this.heapify(this.array.length, i);
                i--;
            }
            
            while (k >= 0) {
                this.swap(0, k);
                this.heapify(k, 0);
                k--;
            }
        }
        
        sortStep(){ 

            if (this.i >= 0) {
                this.heapify(this.array.length, this.i);
                this.i--;
            }
            
            if (!(this.i >= 0) && this.k >= 0) {
                this.swap(0, this.k);
                this.heapify(this.k, 0);
                this.k--;
            }
        }
        
        heapify(length, i) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let max = i;

            if (left < length && this.array[left].value > this.array[max].value) {
                max = left;
            }

            if (right < length && this.array[right].value > this.array[max].value)     {
                max = right;
            }

            if (max != i) {
                this.swap(i, max);
                this.heapify(length, max);
            }
        }
}