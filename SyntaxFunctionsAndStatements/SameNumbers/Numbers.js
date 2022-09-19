function numbers(num){
    let number = num;
    let mark = num % 10;
    let sum = 0;
    let flag = true;

    while (number > 0) {
        if (number % 10  != mark) {
            flag = false;
        }

        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(flag);
    console.log(sum);
}

numbers(2222222);
numbers(1234);