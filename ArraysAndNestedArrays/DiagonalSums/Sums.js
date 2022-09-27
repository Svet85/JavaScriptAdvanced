function func(matrix){
    let primary = 0;
    let secondary = 0;

    for (let r = 0; r < matrix.length; r++) {
        primary += matrix[r][r];
        secondary += matrix[r][matrix.length - 1 - r];
    }

    console.log(primary + ' ' + secondary);
}

func([[20, 40], [10, 60]])