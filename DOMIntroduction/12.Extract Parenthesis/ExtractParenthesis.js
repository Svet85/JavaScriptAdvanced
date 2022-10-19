function extract(content) {
    let result = '';
    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;
    let array = [];

    while (true) {
        
        match = pattern.exec(text);
        if (match == null) {
            break;
        }
        array.push(match[1]);
    }

    return array.join('; ');
}