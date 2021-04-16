function NumToObj(num) {
    var arrNumber = num.split('');
    while (arrNumber.length < 3) {
        arrNumber.unshift(0);
    }
    var objNumber = {};
    if (arrNumber.length > 3) {
        return null;
    }
    else {
        objNumber['сотни'] = +arrNumber[0];
        objNumber['десятки'] = +arrNumber[1];
        objNumber['единицы'] = +arrNumber[2];
        return objNumber;
    }
}
var number = prompt("Input number");
var obj = NumToObj(number);
if (obj == null) {
    console.log("Object is null");
}else{
var k= Object.keys(obj)
console.log(`${k[0]} ${obj.сотни}`)
console.log(`${k[1]} ${obj.десятки}`)
console.log(`${k[2]} ${obj.единицы}`)
    
}