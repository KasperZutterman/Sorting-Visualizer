
export default class ArrayView {
        
        constructor(array, canvas, width, height) {
            this.array = array;
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.width = width;
            this.height = height;
        }
        
        drawArray() {
            for (let i = 0; i < this.array.array.length; i++) {
                this.drawObject(this.array.array[i], this.array.array.length, i);
            }
        }

        drawObject(object, size, xpos) {
            this.context.fillStyle = object.color;
            let dx = this.width / size;
            let dy = (object.value + 1) / size * this.height;
            let x = xpos * dx;
            this.context.fillRect(x,0,dx,dy);
        }
}

