function rectangle(width, height, color) {
    let obj = {width, height};
    color = color.charAt(0).toUpperCase() + color.substring(1);
    obj.color = color;
    obj.calcArea  = function() {return this.width * this.height};

    return obj;
};

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());