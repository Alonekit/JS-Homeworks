var purchases =[`Iphone`,`Вода`,`Часы`,`Трусы`,`Домино`]
for(element of purchases)
console.log(element)
function countBasketPrice(massage) {
    purchases.push(12000, 95, 10000, 40, 400);
    var summ = purchases[5] + purchases[6] + purchases[7] + purchases[8] + purchases[9]
console.log(`${massage}: ${summ}`)
}
countBasketPrice(`Общая сумма покупок`)
