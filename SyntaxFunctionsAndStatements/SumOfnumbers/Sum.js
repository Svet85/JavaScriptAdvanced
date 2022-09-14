function myFunc(a,b){
    let start = Number(a);
    let last = Number(b);
    let result = 0;

    for (let index = start; index <= last; index++) {
        result += index;
    }

    console.log(result);
}

myFunc('1','5');
myFunc('-8','20');