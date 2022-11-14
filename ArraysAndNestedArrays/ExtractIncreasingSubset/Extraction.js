function extractin(array) {
    let result = array.reduce((previous, current, index) => {
        if (index === 0) {
            return [current];
        };
        
        if (previous[previous.length - 1] <= current) {
            return [...previous, current];
        };
        
        return previous;
    }, 
    []);

    return result;
}

extractin([]);


