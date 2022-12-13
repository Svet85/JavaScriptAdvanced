function getFibonator() {
    let a = 0;
    let b = -1;
    let result = 0;

    return function () {
        result = Math.abs(a + b);
        b = a;
        a = result;

        return result;
    };
    
};

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13