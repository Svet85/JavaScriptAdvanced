function func(array){
    let result = [];
    
    array.sort((a,b) => a - b);
    result.push(array[0]);
    result.push(array[1]);

    console.log(result.join(' '));
}

func([30, 15, 50, 5])