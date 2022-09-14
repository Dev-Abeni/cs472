x = 1; 
var a = 5; 
var b = 10; 

var c = function (a, b, c) {
     console.log(x);
     console.log(a); 

     var f = function (a, b, c){
        b = a; 
        console.log(b); 
        b = c; 
        var x = 5; 
     }

     f(a, b, c); 
     console.log(b); 
     var x = 5; 
}

c(8, 9, 10); 
console.log(b); 
console.log(x); 

var x = 9; 
function myFunction() {
    return x * x; 
}

console.log(myFunction()); 
x = 5; 
console.log(myFunction());

var foo = 1; 
function bar() {
    if(!foo){
        var foo = 10; 
    }
    alert(foo);
}
bar()

x = 1; 
function xFunc() {
    console.log("child function " + x);
    function yFunc() {
        console.log("grand child function " + x);
    }

    yFunc()
}

xFunc()