function myFunc(a,b,c){
    let result;
    
    switch (c){
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '/': result = a / b; break;
        case '*': result = a * b; break;
        case '%': result = a % b; break;
        case '**': result = a**b; break;
    }

    console.log(result);
}

myFunc(1,2,'+');
myFunc(1,2,'-');
myFunc(1,2,'*');
myFunc(1,2,'/');
myFunc(1,2,'%');
myFunc(1,2,'**');