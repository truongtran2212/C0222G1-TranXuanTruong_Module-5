var money = 200;
var buyACar = function (car) {
    return new Promise((function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 7777;
var promise = buyACar("Vinfast")
    .then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
