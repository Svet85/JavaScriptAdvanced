function solution() {
    return {

        text: '',
        append(value) {
            this.text += value;
        },
        removeStart(value){
            this.text = this.text.slice(value);
        },
        removeEnd(value){
            this.text = this.text.slice( -0, -value);
        },
        print() {console.log(this.text)}
    };
}

let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();

let firstZeroTest = solution();

firstZeroTest.append('hello'); firstZeroTest.append('again'); firstZeroTest.removeStart(3); firstZeroTest.removeEnd(4); firstZeroTest.print(); 