function diags(input) {
    let matrix = [];
    input.forEach(element => {
        let a = element.split(' ').map(Number);
        matrix.push(a);
    });

    let sum_1 = 0;
    let sum_2 = 0;

    for (let r = 0; r < matrix.length; r++) {
        sum_1 += matrix[r][r];
        sum_2 += matrix[r][matrix.length - 1 - r];
    }

    if (sum_1 === sum_2) {
       for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix.length; c++) {
                if (r === c || c === matrix.length - 1 - r) {
                    continue;
                }

                matrix[r][c] = sum_1;
            }
       };
    }

    matrix.forEach(row => {
        console.log(row.join(' '))
    });
}

diags(['1 1 1', '1 1 1', '1 1 0']);
diags(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'] );