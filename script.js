
const username = prompt("Enter your name");
const userage = +(prompt(89))


if (userage >= 25) {
    debugger;
    document.writeln("My name is : " + `${username}` + '<br>')
    document.writeln("I am Working Professional")
} else {
    document.writeln("My name is : " + `${username}` + '<br>')
    document.writeln("I am Student")
}



function test(){
    
    function foo(){}
    
    var bar;
    foo();
    bar();
    function foo(){
        console.log("foo")
    }
    
    bar = function(){
        console.log("bar")
    }
    
}


test()
