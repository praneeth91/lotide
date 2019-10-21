const assertEqual =require("./assertEqual")

const tail = function(array){
let a = array;
a = a.slice(1);
return a;
};
module.exports = tail;