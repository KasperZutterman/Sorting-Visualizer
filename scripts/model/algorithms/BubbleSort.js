
export default class BubbleSort {
        
        constructor(Array) {
            this.array = Array.array;
            this.max = 0;
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
            for (let i = 0; i < this.array.length - 1; i++){
                for (let j = 0; j < this.array.length - i - 1; j++){
                    if (this.array[j].value > this.array[j + 1].value){
                        this.swap(j, j + 1);
                    }
                }
            }
        }
        
        sortStep(){ 

            for (let j = 0; j < this.array.length - this.max - 1; j++){
                if (this.array[j].value > this.array[j + 1].value){
                    this.swap(j, j + 1);
                }
            }

            if (this.max > 0) {
                this.max--;
            }
        }
}