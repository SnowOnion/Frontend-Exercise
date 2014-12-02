;
console.log('-GLOBAL START');

var x = 2;
function Test(){
    this.x = 1;
}
var o = new Test();
console.log("o.x: " + o.x); //1
o.x = 3;
window.Test(); // 等于 Test()
//new Test();
x*=10;
console.log("o.x: " + o.x); //3
console.log("x: " + x); //10

console.log('GLOBAL END---');


