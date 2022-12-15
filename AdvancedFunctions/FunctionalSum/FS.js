function add(n) {
    let a = n;

    function aaa(num) {
        a += num;
        return aaa;
    }
    aaa.toString = () => {return a};

    return aaa;
};

add(1)(6)(-3);