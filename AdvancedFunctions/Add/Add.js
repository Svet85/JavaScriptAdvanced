function solution(n) {
  let a = n;
    
  return function (b) {
        return a + b;
  }  
};

let add5 = solution(5);

console.log(add5(2));

console.log(add5(5));