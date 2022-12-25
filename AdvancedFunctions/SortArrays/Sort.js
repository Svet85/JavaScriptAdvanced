function solve(array, cmd) {
    return cmd === 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
};