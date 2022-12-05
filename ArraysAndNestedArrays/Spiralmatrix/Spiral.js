function solve(a, b) {
    const matrix = Array(a).fill(null).map(() => Array(b).fill(null));
    let turns = a * b;
    let row = 0;
    let col = -1;

    for (let i = 1; i <= turns; i++) {
        if (col + 1 >= 0 && col + 1 < a && matrix[row][col + 1] === null) {
            col++;
        }else if (row + 1 >= 0 && row + 1 < a && matrix[row + 1][col] === null) {
            row++;
        }else if (col - 1 >= 0 && matrix[row][col - 1] === null) {
            col--;
        }else if (row - 1 >= 0 && matrix[row - 1][col] === null) {
            while (matrix[row - 1][col] === null) {
              row--;
              matrix[row][col] = i;
              i++;
            };
            i--;
            continue;
        };
        
        matrix[row][col] = i;
    };

    matrix.forEach(el => console.log(el.join(' ')));
};

solve(5, 5);