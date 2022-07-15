function totalFibonacci(quantity: number) {
    let total: number = 0
    let number1: number = 0
    let number2: number = 1
    let sum: number = 0

    console.log(0)
    for (let i = 1; i < quantity; i++) {
        number1 = number2
        number2 = total

        total = number1 + number2

        sum += total
        console.log(total)
    }
    console.log("Tổng của " + quantity + " số fibonacci là " + sum)
}

totalFibonacci(5)