function func(array){
    
    array.sort((a,b) => a - b);
    array.splice(0, Math.floor(array.length / 2));

    return array;
}

console.log(func([3, 19, 14, 7, 2, 19, 6]))