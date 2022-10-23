function focused() {
    Array.from(document.querySelectorAll('input')).forEach(element => {
        element.addEventListener('focus', onFocus);
        element.addEventListener('blur', blurred);
    });

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
    }

    function blurred(event) {
        event.target.parentElement.className = '';
    }

};