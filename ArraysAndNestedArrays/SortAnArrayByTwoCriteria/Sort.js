function order(array) {
    array.sort((a, b) => {
        if (a.length > b.length) {
          return 1;
        }else if (a.length < b.length) {
          return -1;
        }else {
           return  alphaValue(a, b);
        };
      });  

    console.log(array.join('\n'));

    function alphaValue(x, y) {
        // let xSum = [...x].reduce((a, b,) => {
        //     let num = b.charCodeAt();
        //     return a + num;
        // }, 0);

        // let ySum = [...y].reduce((a, b,) => {
        //     let num = b.charCodeAt();
        //     return a + num;
        // }, 0);

        // if (xSum > ySum) {
        //     return 1;
        // }else if (xSum < ySum) {
        //     return -1;
        // }else{
        //     return 0;
        // };

        return x.localeCompare(y);

    }
}



order(['alpha',

'beta', 'gamma']);