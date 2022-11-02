function createSortedList() {
    let obj = {};
    obj.list = [];
    
    obj.add = function (number)  {
        obj.list.push(number);
        obj.list.sort((a, b) => a - b);
        this.size++;
    };
    
    obj.remove = function (index) {
        if (index >= 0 && index < obj.list.length) {
            obj.list.splice(index,1);
            obj.list.sort((a, b) => a - b);
            this.size--;
        }
        
    };

    obj.get = function (index) {
        if (index >= 0 && index < obj.list.length) {
            return this.list[index]; 
        };   
    };

    obj.size = 0;

    return obj;
}


let list = createSortedList();

console.log(list.size);
list.add(5);
console.log(list.size);

list.add(6);
console.log(list.size);

list.add(7);

console.log(list.size);
console.log(list.get(1));

list.remove(1);
console.log(list.size);

console.log(list.get(1)); 