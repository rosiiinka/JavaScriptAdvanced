function solve() {
    let obj = Object.create({});
    obj.extend = function (templete) {
       for (let prop in templete) {
           if (typeof templete[prop] == 'function'){
               Object.getPrototypeOf(obj)[prop] = templete[prop];
           }else {
               obj[prop] = templete[prop];
           }

       }
    };
    return obj;

}

let myObj = solve();
myObj.extend();

