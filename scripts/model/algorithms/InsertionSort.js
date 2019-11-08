export default class selectionSort {
        
        constructor(Array) {
            this.array = Array.array;
            this.min = 1;
            //this.tempmin = 0;
        }
                
        sort(){
            for (var i = 1; i < this.array.length; i++) {
              if (this.array[i].value < this.array[0].value) {
                //move current element to the first position
                this.array.unshift(this.array.splice(i,1)[0]);
              } 
              else if (this.array[i].value > this.array[i-1].value) {
                //leave current element where it is
                continue;
              } 
              else {
                //find where element should go
                for (var j = 1; j < i; j++) {
                  if (this.array[i].value > this.array[j-1].value && this.array[i].value < this.array[j].value) {
                    //move element
                    this.array.splice(j,0,this.array.splice(i,1)[0]);
                  }
                }
              }
            }
        }
        
        sortStep(){ 
            if (this.array[this.min].value < this.array[0].value) {
                 //move current element to the first position
                 this.array.unshift(this.array.splice(this.min,1)[0]);
             } 
             else if (this.array[this.min].value > this.array[this.min-1].value) {
               //leave current element where it is
               //continue;
             } 
             else {
               //find where element should go
               for (var j = 1; j < this.min; j++) {
                 if (this.array[this.min].value > this.array[j-1].value && this.array[this.min].value < this.array[j].value) {
                   //move element
                   this.array.splice(j,0,this.array.splice(this.min,1)[0]);
                 }
               }
             }
             if (this.min < this.array.length - 1) {
                 this.min++;
             }
        }
}


