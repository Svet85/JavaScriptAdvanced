function myFunction(a,b,c){
    const aLength = a.length;
    const bLength = b.length;
    const cLength = c.length;
    const lengthSum = aLength + bLength + cLength;
    const averageLength = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLength);
}

myFunction('chocolate', 'ice cream', 'cake');
myFunction('pasta', '5', '22.3');