function totalFibonacci(quantity) {
    var total = 0;
    var number1 = 0;
    var number2 = 1;
    var sum = 0;
    console.log(0);
    for (var i = 1; i < quantity; i++) {
        number1 = number2;
        number2 = total;
        total = number1 + number2;
        sum += total;
        console.log(total);
    }
    console.log("Tổng của " + quantity + " số fibonacci là " + sum);
}
totalFibonacci(5);
