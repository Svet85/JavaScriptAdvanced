function func(array, start, end){
    let startIndex  = array.indexOf(start);
    let endIndex = array.indexOf(end);

    let result = array.slice(startIndex, endIndex + 1);

    return result;
}

console.log(func(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'));