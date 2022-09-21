function checker(x1, x2, y1, y2) {
    let result_1 = Math.sqrt((x1 - 0)**2 + (x2 - 0)**2);
    let string_1 = Number.isInteger(result_1)? 'valid' : 'invalid';
    console.log(`{${x1}, ${x2}} to {0, 0} is ${string_1}`);

    let result_2 = Math.sqrt((y1 - 0)**2 + (y2 - 0)**2);
    let string_2 = Number.isInteger(result_2)? 'valid' : 'invalid';
    console.log(`{${y1}, ${y2}} to {0, 0} is ${string_2}`);
    
    let result_3 = Math.sqrt((y1 - x1)**2 + (y2 - x2)**2);
    let string_3 = Number.isInteger(result_3)? 'valid' : 'invalid';
    console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is ${string_3}`);

}

checker(0, 0, 0, 0);
checker(2, 1, 1, 1);