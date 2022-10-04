function magic(matrix) {
    let flag = true;
    let magicSum = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        
        let sumCol = 0;
        
        for (let col = 0; col < matrix.length; col++) {
            sumCol += matrix[col][row];
        } 

        if (sumRow !== magicSum || sumCol !== magicSum) {
            flag = false;
        }
    }

    return flag;
};

magic([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]);

magic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magic([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);