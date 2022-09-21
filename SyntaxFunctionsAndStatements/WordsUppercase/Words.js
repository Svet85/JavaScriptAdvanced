function extract(text) {
    let result;
    const pattern = /(\w+)/g;
    let array = Array.from(text.match(pattern));
    result = array.map(w => w.toUpperCase());
    return result.join(', ');
}

extract('Hi,');