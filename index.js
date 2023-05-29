
var var1;
var var2;
var outer;
let p1 = new Promise(function (resolve, reject) {
    let fetch1 = document.getElementById('TEMPSMPL')
    fetch1.addEventListener('change', function (event) {
        var1 = event.target.value;
        resolve(var1);
    })
})
let p2 = new Promise(function (resolve, reject) {
    let fetch2 = document.getElementById('TEMPOPST')
    fetch2.addEventListener('change', function (event) {
        var2 = event.target.value;
        resolve(var2);
    })
})
let p3 = new Promise(function (resolve) {
    let btn = document.getElementById('submit-button');
    console.log(btn);
    btn.addEventListener("click", resolve);

})
let p4 = new Promise(function (resolve) {
    let btn2 = document.getElementById('submit-button1');
    console.log(btn2);
    btn2.addEventListener("click", resolve);
})
p1.then((response1) => {
    p2.then((response2) => {
        p3.then(() => {
            var options = document.getElementById('TEMPSMPL').options;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                options[i].disabled = true;
            }
            var options = document.getElementById('TEMPOPST').options;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                options[i].disabled = true;
            }
            if (response1 == "Celsius" && response2 == "Fahrenheit") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    console.log()
                    item2.value = (outer * 9 / 5) + 32;
                })
            }

            else if (response1 == "Celsius" && response2 == "Kelvin") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = Number(outer) + 273.5;
                })
            }
            else if (response1 == "Fahrenheit" && response2 == "Celsius") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = outer / 12;
                })
            }
            else if (response1 == "Fahrenheit" && response2 == "Kelvin") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = (Number(outer) + 459.67) * 5 / 9;
                })

            }
            else if (response1 == "Kelvin" && response2 == "Celsius") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = Number(outer) - 273.5;
                })
            }
            else if (response1 == "Kelvin" && response2 == "Fahrenheit") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = outer * (9 / 5) - 459.67;
                })
            }
            else if (response1 == "Kilogram" && response2 == "Gram") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })

                p4.then(() => {
                    item2.value = outer * 1000;
                })
            }
            else if (response1 == "Gram" && response2 == "Kilogram") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = outer / 1000;
                })
            }
            else if (response1 == "Centimeter" && response2 == "Meter") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = outer / 100;
                })
            }
            else if (response1 == "Meter" && response2 == "Centimeter") {
                console.log("condition triggered")
                var item = document.getElementById('initial-value')
                var item2 = document.getElementById('final-value')
                item.addEventListener('input', function () {
                    let f = this.value;
                    outer = f;
                })
                p4.then(() => {
                    item2.value = outer * 100;
                })
            }
            else {
                alert("Kindly read the guidelines")
            }



        })
    })
})
const refresh = function () {
    let temp = document.getElementById('TEMPSMPL')
    var options = document.getElementById('TEMPSMPL').options;
    for (var i = 0, iLen = options.length; i < iLen; i++) {
        options[i].disabled = false;
        temp.value = 'Select the unit'
    }
    let temp2 = document.getElementById('TEMPOPST')
    var options = document.getElementById('TEMPOPST').options;
    for (var i = 0, iLen = options.length; i < iLen; i++) {
        options[i].disabled = false;
        temp2.value = 'Select the unit'
    }
    var item = document.getElementById('initial-value')
    item.value = item.defaultValue;
    var item = document.getElementById('final-value')
    item.value = item.defaultValue;


    var var1;
    var var2;
    var outer;
    let p1 = new Promise(function (resolve, reject) {
        let fetch1 = document.getElementById('TEMPSMPL')
        fetch1.addEventListener('change', function (event) {
            var1 = event.target.value;
            resolve(var1);
        })
    })
    let p2 = new Promise(function (resolve, reject) {
        let fetch2 = document.getElementById('TEMPOPST')
        fetch2.addEventListener('change', function (event) {
            var2 = event.target.value;
            resolve(var2);
        })
    })
    let p3 = new Promise(function (resolve) {
        let btn = document.getElementById('submit-button');
        console.log(btn);
        btn.addEventListener("click", resolve);

    })
    let p4 = new Promise(function (resolve) {
        let btn2 = document.getElementById('submit-button1');
        console.log(btn2);
        btn2.addEventListener("click", resolve);
    })
    p1.then((response1) => {
        p2.then((response2) => {
            p3.then(() => {
                var options = document.getElementById('TEMPSMPL').options;
                for (var i = 0, iLen = options.length; i < iLen; i++) {
                    options[i].disabled = true;
                }
                var options = document.getElementById('TEMPOPST').options;
                for (var i = 0, iLen = options.length; i < iLen; i++) {
                    options[i].disabled = true;
                }
                if (response1 == "Celsius" && response2 == "Fahrenheit") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        console.log()
                        item2.value = (outer * 9 / 5) + 32;
                    })
                }

                else if (response1 == "Celsius" && response2 == "Kelvin") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = Number(outer) + 273.5;
                    })
                }
                else if (response1 == "Fahrenheit" && response2 == "Celsius") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = (Number(outer) - 32) % 1.8;
                    })
                }
                else if (response1 == "Fahrenheit" && response2 == "Kelvin") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = (Number(outer) + 459.67) * 5 / 9;
                    })

                }
                else if (response1 == "Kelvin" && response2 == "Celsius") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = Number(outer) - 273.5;
                    })
                }
                else if (response1 == "Kelvin" && response2 == "Fahrenheit") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = outer * (9 / 5) - 459.67;
                    })
                }
                else if (response1 == "Kilogram" && response2 == "Gram") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })

                    p4.then(() => {
                        item2.value = outer * 1000;
                    })
                }
                else if (response1 == "Gram" && response2 == "Kilogram") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = outer / 1000;
                    })
                }
                else if (response1 == "Centimeter" && response2 == "Meter") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = outer / 100;
                    })
                }
                else if (response1 == "Meter" && response2 == "Centimeter") {
                    console.log("condition triggered")
                    var item = document.getElementById('initial-value')
                    var item2 = document.getElementById('final-value')
                    item.addEventListener('input', function () {
                        let f = this.value;
                        outer = f;
                    })
                    p4.then(() => {
                        item2.value = outer * 100;
                    })
                }
                else {
                    alert("Kindly read the guidelines")
                }



            })
        })
    })

}
