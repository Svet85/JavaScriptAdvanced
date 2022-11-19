function solve(params) {
    let [rows, cols, row, col] = params;

    const matrix = Array(rows).fill(null).map(() => Array(cols).fill(null));

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            let a = Math.abs(r - row) + 1;
            let b = Math.abs(c - col) + 1;

            if (a >= b) {
                matrix[r][c] = a;
            }else {
                matrix[r][c] = b;
            };
        };
    };


    matrix.forEach(el => console.log(el.join(' ')));
};

solve([4,4,0,0]);