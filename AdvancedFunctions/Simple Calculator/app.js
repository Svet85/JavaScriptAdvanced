function calculator() {
    return {
        init(a, b, c){
            this.element_1 = document.querySelector(a);
            this.element_2 = document.querySelector(b);
            this.result = document.querySelector(c);
        },
        add(){
            let n = Number(this.element_1.value);
            let m = Number(this.element_2.value);
            let sum = n + m;
            this.result.value = sum;
        },
        subtract(){
            let n = Number(this.element_1.value);
            let m = Number(this.element_2.value);
            let sub = n - m;
            this.result.value = sub;
        }
    };
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');




