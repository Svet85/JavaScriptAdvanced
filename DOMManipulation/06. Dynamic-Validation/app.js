function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validate);
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    function validate() {
        input.className = 'error';
        if (input.value.match(pattern)) {
            input.className = '';
        };
    }
}