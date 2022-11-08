var size = prompt("enter your shoesize")
var birthyear = prompt("enter your birthyear")
function fn() {
    var mlt = size * 2;
    var sum = mlt + 5;
    var mlt2 = sum*50;
    var sub = mlt2 - birthyear;
    var add = sub + 1766;
    return add
}

alert(fn())