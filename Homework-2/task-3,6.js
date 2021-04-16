function calc(a,b) {
    if (a > 0 && b > 0) {
        alert(`Разность чисел: ${a - b}`)
    } else if (a < 0 && b < 0) {
        alert(`произведение чисел= ${a * b}`)
    } else if (a >= 0 && b <= 0 || a <= 0 && b >= 0) {
        alert(`Сумма чисел= ${a + b}`)
    } else {
        alert(`Чет не то`)
    }
}
calc(2,2) 

// --------- mathOperation-------------------------
function mathOperation(arg1, arg2, operanion) {
    switch (operanion) {
        case "differ":
            alert(`${operanion}: ${arg1}| ${arg2}`)
            calc(arg1,arg2)
            break
        case "mult":
            alert(`${operanion}: ${arg1}| ${arg2}`)
            calc(arg1, arg2)
            break
            case "summ":
            alert(`${operanion}: ${arg1}| ${arg2}`)
            calc(arg1,arg2)
            break
            case "div":
            alert(`${operanion}: ${arg1}| ${arg2}`)
            alert(`частное чисел: ${arg1/arg2}`)
            break
            default:
                alert(`Ой, а я так не умею :((`)
    }  
}
mathOperation(2,2,"div")


