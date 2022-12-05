function neme(array) {
    array.sort((a, b) => a - b);
    let result = [];
    let middle = Math.floor(array.length / 2);

    for (let i = 0; i < middle; i++) {
        result.push(array[i]);
        result.push(array[array.length - 1 - i]);
    };

    if (array.length % 2 !== 0) {
        result.push(array[middle]);
    }

    return result;
}

neme([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 32]);