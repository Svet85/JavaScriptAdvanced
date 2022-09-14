function myFunc(a = 5){

    for (let index = 0; index < a; index++) {
        console.log('* '.repeat(a).trimEnd());       
    }
}

myFunc(2)