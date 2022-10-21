function deleteByEmail() {
    let input = document.getElementsByName('email')[0];
    let result = document.getElementById('result');
    let table = document.querySelectorAll('tbody tr td:nth-child(2)');
    let deleted = false;

    for (let i = 0; i < table.length; i++) {
        if (table[i].textContent === input.value) {
            table[i].parentElement.remove();
            deleted = true;
            break;
        };
    };

    result.textContent = deleted ? 'Deleted.' : 'Not found.';

    input.value = '';
};