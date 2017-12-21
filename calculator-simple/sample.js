/********* HONEY'S JS ***********/

var given1 = document.getElementById("given1");
var given2 = document.getElementById("given2");
var operations = document.getElementsByClassName('operation');

for(var i =0; i<operations.length;i++) {
    operations[i].addEventListener('click', given);
}


function given() {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var operation   = this.getAttribute('data-operation');
    var result = 0;

    if (operation == 'add') {
        result = (given1Value + given2Value);
    } else if (operation == 'subtract') {
        result = (given1Value - given2Value);
    } else if (operation == 'multiply') {
        result = (given1Value * given2Value);
    } else if (operation == 'divide') {
        result = (given1Value / given2Value);
    }

    document.getElementById("result").innerHTML = result;
}

/*********** MY SECOND ATTEMPT ************/
/*
var given1 = document.getElementById("given1");
var given2 = document.getElementById("given2");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");


add.addEventListener('click', function() {
    given('add');
});

subtract.addEventListener('click', function() {
    given('subtract');
});

multiply.addEventListener('click', function() {
    given('multiply');
});

divide.addEventListener('click', function() {
    given('divide');
});

function given(operation) {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var result = 0;

    if (operation == 'add') {
        result = (given1Value + given2Value);
    } else if (operation == 'subtract') {
        result = (given1Value - given2Value);
    } else if (operation == 'multiply') {
        result = (given1Value * given2Value);
    } else if (operation == 'divide') {
        result = (given1Value / given2Value);
    }

    document.getElementById("result").innerHTML = result;
} */


/************ MY FIRST ATTEMPT ***********/
/*
divide.onclick = function answer() {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var result = (given1Value / given2Value);

    document.getElementById("result").innerHTML = result;
}

multiply.onclick = function answer() {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var result = (given1Value * given2Value);

    document.getElementById("result").innerHTML = result;
}

subtract.onclick = function answer() {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var result = (given1Value - given2Value);

    document.getElementById("result").innerHTML = result;
}

add.onclick = function answer() {
    var given1Value = parseInt(given1.value);
    var given2Value = parseInt(given2.value);
    var result = (given1Value + given2Value);

    document.getElementById("result").innerHTML = result;
} */