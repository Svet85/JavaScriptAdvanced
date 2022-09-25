function func(matrix){
    let biggest = Number.MIN_SAFE_INTEGER;
    
    matrix.forEach(element => {
        element.forEach(element => {
            if (Number(element) >= biggest) {
                biggest = element;
            }
        });
    });

    return biggest;
}

console.log(func([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))