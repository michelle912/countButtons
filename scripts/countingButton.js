function incrementCounter(id) {
    var counter = parseInt(document.getElementById(id).innerHTML, 10);
    counter = isNaN(counter) ? 0 : counter;
    counter++;
    document.getElementById(id).innerHTML = counter;

    sum();
}

function decrementCounter(id) {
    var counter = parseInt(document.getElementById(id).innerHTML, 10);
    counter = isNaN(counter) ? 0 : counter;
    counter--;
    document.getElementById(id).innerHTML = counter;

    sum();
}


function sum() {
    var firstNumber = parseInt(document.getElementById('firstNumber').innerHTML, 10);
    var secondNumber = parseInt(document.getElementById('secondNumber').innerHTML, 10);

    document.getElementById("sum").innerHTML = firstNumber + secondNumber;
}