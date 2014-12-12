;
console.log('-GLOBAL START');
console.log('ECMA-262 是 JavaScript 标准的官方名称。\
JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新），并于 1997 年被 ECMA（一个标准协会）采纳。')

var x = 2;
function Test() {
    this.x = 1;
}
var o = new Test();
console.log("o.x: " + o.x); //1
o.x = 3;
window.Test(); // 等于 Test()
//new Test();
x *= 10;
console.log("o.x: " + o.x); //3
console.log("x: " + x); //10

function gogo() {
    alert('watch "this"!');
    this.innerHTML = "THIS is this";
    console.log('in gogo(), this is:', this);
}

console.log("如果重新声明 JavaScript 变量，该变量的值不会丢失：")
var cpcp = 1;
var cpcp;
console.log(cpcp);

//下面的代码创建名为 cars 的数组：

//var cars=new Array();
var cars = [];
cars[0] = "Audi";
cars[1] = "BMW";
cars[2] = "Volvo";
console.log(cars);

//或者 (condensed array):
cars = new Array("Audi", "BMW", "Volvo");
console.log(cars);

//或者 (literal array):
//实例
cars = ["Audi", "BMW", "Volvo"];
console.log(cars);

console.log("不敢信了，前面谬误略多：Undefined 这个值表示变量不含有值。\
可以通过将变量的值设置为 null 来清空变量。")


//当您声明新变量时，可以使用关键词 "new" 来声明其类型：
//var carname=new String;
var carname = String;
var x = Number;
var y = Boolean;
var carsx = [];
//var person= new Object();
var person = {};
console.log("JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。");
console.log("如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。");

console.log("now, == and ===");
var yoo = 5, three = "3";
console.log("var yoo=5,three='3';");
console.log("yoo==5", yoo == 5, "three==3", three == 3);
console.log("yoo===5", yoo === 5, "three===3", three === 3);
console.log("yoo=='5'", yoo == '5', "three=='3'", three == '3');
console.log("yoo==='5'", yoo === '5', "three==='3'", three === '3');

console.log("now, will switch use == or ===?");
switch (three) {
    case 3:
        console.log("ok use ==");
        break;
    case '3':
        console.log("whoops use ===");
        break;
}

switch (three) {
    case '3':
        console.log("whoops use ===");
        break;
    case 3:
        console.log("ok use ==");
        break;
}

console.log("for in 实际上遍历对象的 keys …… 数组也是对象…… 所以 for in 语法在数组里得到下标，是个“顺便发生”的事情……");
var pp = {
    a: '1',
    c: '3',
    b: '2'
};
for (var p in pp) {
    console.log(p, pp[p]);
}

try {
    console.log('111');
    console.log(pp[pp.length]);
    console.log('222');
    console.fuck();
    console.log('333');
} catch (err) {
    console.log("catch", err);
    //throw("woo hoo~");
    //throw "wee.";
}

console.log('如需改变 HTML 元素的属性，请使用这个语法：\
document.getElementById(id).attribute=new value');

console.log('改变样式：document.getElementById("p2").style.color="blue";');

console.log('now, 参数列表访问者，谜之 argument 变量');
function farguments() {
    console.log(arguments.length);
    for (var i in arguments) {
        console.log(i, arguments[i]);
    }
}

farguments(1, 'a', {c: 'fff'}, ['u', undefined, null, 052]);

console.log("now, 清理三观");
console.log('用 Function 类直接创建函数的语法如下：\n\
var function_name = new function(arg1, arg2, ..., argN, function_body)\n\
在上面的形式中，每个 arg 都是一个参数，最后一个参数是函数主体（要执行的代码）。这些参数必须是字符串。\n\
记得下面这个函数吗？\n\
function sayHi(sName, sMessage) {\n\
    alert("Hello " + sName + sMessage);\n\
}\n\
还可以这样定义它：\n\
var sayHi\n\
    =\n\
    new Function("sName", "sMessage", "alert(\"Hello \" + sName + sMessage);");');

console.log('ECMAScript 定义的属性 length 声明了函数期望的参数个数。Function 对象也有与所有对象共享的 valueOf() 方法和 toString() 方法。这两个方法返回的都是函数的源代码，在调试时尤其有用。');

/**
 * closure http://www.w3school.com.cn/js/pro_js_functions_closures.asp
 *
 * 闭包，指的是词法表示包括不被计算的变量的函数，也就是说，函数可以使用函数之外定义的变量。
 简单的闭包实例
 在 ECMAScript 中使用全局变量是一个简单的闭包实例。请思考下面这段代码：
 var sMessage = "hello world";

 function sayHelloWorld() {
  alert(sMessage);
}

 sayHelloWorld();
 在上面这段代码中，脚本被载入内存后，并没有为函数 sayHelloWorld() 计算变量 sMessage 的值。该函数捕获 sMessage 的值只是为了以后的使用，也就是说，解释程序知道在调用该函数时要检查 sMessage 的值。sMessage 将在函数调用 sayHelloWorld() 时（最后一行）被赋值，显示消息 "hello world"。
 上句那个“赋值”应该是“求值”吧！

 复杂的闭包实例
 在一个函数中定义另一个会使闭包变得更加复杂。例如：
 var iBaseNum = 10;

 function addNum(iNum1, iNum2) {
  function doAdd() {
    return iNum1 + iNum2 + iBaseNum;
  }
  return doAdd();
}
 这里，函数 addNum() 包括函数 doAdd() （闭包）。内部函数是一个闭包，因为它将获取外部函数的参数 iNum1 和 iNum2 以及全局变量 iBaseNum 的值。 addNum() 的最后一步调用了 doAdd()，把两个参数和全局变量相加，并返回它们的和。
 这里要掌握的重要概念是，doAdd() 函数根本不接受参数，它使用的值是从执行环境中获取的。
 可以看到，闭包是 ECMAScript 中非常强大多用的一部分，可用于执行复杂的计算。
 提示：就像使用任何高级函数一样，使用闭包要小心，因为它们可能会变得非常复杂。
 *
 * */


function cnvs_getCoordinates(e) {
    x = e.clientX;
    y = e.clientY;
    document.getElementById("xycoordinates").innerHTML = "Coordinates: (" + x + "," + y + ")";
}

function cnvs_clearCoordinates() {
    document.getElementById("xycoordinates").innerHTML = "sayonara";
}

var cvs = document.getElementById('cvs');
var ctx = cvs.getContext("2d");
ctx.fillRect(0, 0, 50, 100);

var domdiv = document.querySelector('#dom-div');
var p1 = document.createElement('p');
var text1 = document.createTextNode('aloha text');
var text2 = document.createTextNode('blabla');
p1.appendChild(text1);
p1.appendChild(text2);

domdiv.appendChild(p1);


/**如果能够在不引用父元素的情况下删除某个元素，就太好了。</p>
 <p>不过很遗憾。DOM 需要清楚您需要删除的元素，以及它的父元素。</p>
 <p>这是常用的解决方案：找到您希望删除的子元素，然后使用其 parentNode 属性来找到父元素：</p>
 */

text1.parentNode.removeChild(text1);

console.log('p1', p1);
console.log('domdiv', domdiv);

function PP(a, b) {
    this.a = a || 1;
    this.b = b || 'baka';
}

var ppp = PP(2,'sora');
var yappp =PP();
console.log('不用 new 操作符，则函数中 this 指 caller, 最外层则指 window 对象. ' +
'不仅没创建新对象，还污染了 window 对象的属性.:',ppp,yappp,window.ppp,window,yappp);
console.log('window.a',window.a,'window.b',window.b,'a',a,'b',b);

var newpp=new PP(9,'chiruno');
console.log(newpp,newpp.a,newpp.b);

console.log('空对象，空数组 可不是 false！！！');
var whatiswrong=[0,-0,0.0,-0.0,NaN,undefined,null,[],{},[[]],[{}]];
whatiswrong.map(function(x){console.log(Boolean(x),x)});


console.log('='*40);
console.log('Now, 浏览器对象模型');
var message = location;
/**
 * （至少，当运行在浏览器中时，）
 * 全局对象是 window 对象的属性，
 * 全局函数是 window 对象的方法。
 * */

console.log('location.host hostname pathname port protocal href: ',location.host,location.hostname,location.pathname,location.port,location.protocol,location.href);
/**
 * history.back()
 * history.forward()
 * 学院网站教师墙 :D
 * */

console.log('GLOBAL END---');


