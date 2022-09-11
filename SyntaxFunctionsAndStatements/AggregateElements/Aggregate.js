function myFunc(a){
    let sum = 0;
    a.forEach(x => sum += Number(x));
    console.log(sum);

    let inverseSum = 0;
    a.forEach(x => inverseSum += 1 / Number(x));
    console.log(inverseSum);

    let stringResult = '';
    a.forEach(x => stringResult += x);
    console.log(stringResult);

}

myFunc(['2','4','8', '16'])