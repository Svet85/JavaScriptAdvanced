function colorize() {
    const table = Array.from(document.querySelectorAll('table tr'));
    for (let i = 1; i < table.length; i += 2) {
        table[i].style.background="teal";
    }
}