function calcsumm(addable1, addable2) {
    console.log(`первое слогаемое: ${addable1}`)
    console.log(`второе слогаемое: ${addable2}`)
    return addable1 + addable2;
}
var summresult = calcsumm(2, 2)
console.log(`Сумма чисе: ${summresult}`);

function calcdifference(minuend1, subtracted) {
    console.log(` уменьшаемое: ${minuend1}`)
    console.log(` вычмтаемое: ${subtracted}`)

    return minuend1 - subtracted;
}
var differenceresult = calcdifference(6, 3)
console.log(`Разность чисел: ${differenceresult}`)

function calcMathProduct(factor1, factor2) {
    console.log(`первый множитель: ${factor1}`)
    console.log(`второй множитель: ${factor2}`)
    return factor1 * factor2;
}
var mathProductResult = calcMathProduct(4, 4)
console.log(`Произведение чисел: ${mathProductResult}`);

function calcDiv(dividend, divider) {
    console.log(`делимое: ${dividend}`)
    console.log(`делитель: ${divider}`)
    return dividend / divider;
}
var divResult = calcDiv(100, 2)
console.log(`Частное чисел: ${divResult}`);
