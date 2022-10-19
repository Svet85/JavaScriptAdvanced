function sumTable() {
    let sum = 0;
    const array = Array.from(document.querySelectorAll('table td'));

    for (let index = 1; index < array.length - 1; index += 2) {
        sum += Number(array[index].textContent);
    }

    array[array.length -1].textContent = sum;
}