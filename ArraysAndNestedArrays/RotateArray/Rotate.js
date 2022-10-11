function rotation(array, times) {
    let numberOfRotations = times % array.length;
    let element;

    for (let i = 0; i < numberOfRotations; i++) {
        element = array.pop();
        array.unshift(element);
    };

    console.log(array.join(' '));
}

rotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15 );