function myFunc(a,b){
    let result = new Date(b,a,0);
    console.log(result.getDate());
}

myFunc(2,2021)