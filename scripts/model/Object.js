
export default class Object {
        
        constructor(value) {
            this.value = value;
            this.color = "#000000"
            this.counter = 0;
        }
        
        setColor() {
            if (this.counter === 0) {
                this.color = "#000000"
            }
            else if (this.counter === 1) {
                this.color = "#FF0000"
            }
            else if (this.counter === 2) {
                this.color = "#CC0000"
            }
            else if (this.counter === 3) {
                this.color = "#990000"
            }
            else if (this.counter === 4) {
                this.color = "#660000"
            }
            else if (this.counter === 5) {
                this.color = "#330000"
            }
        }
}

const COLOR =  {
        a : "#110000",
        b : "#330000",
        2. : "#660000",
        3. : "#990000",
        4. : "#CC0000",
        5. : "#FF0000"
};