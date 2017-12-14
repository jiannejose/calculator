/******************************************
 * show operations on solution field 


var showOperations = document.getElementsByClassName('operation');

for (var i = 0; i < showOperations.length; i++) {
    showOperations[i].addEventListener('click', operate);
}

function operate() {
    document.getElementById('solution').innerHTML = this.getAttribute('data-operation');
};
 * ***************************************/

/******************************************
 * show numbers on solution field 


var showNumbers = document.getElementsByClassName('number');

for (var num = 0; num < showNumbers.length; num++) {
    showNumbers[num].addEventListener('click', showNum);
}

function showNum() {
    document.getElementById('solution').innerHTML += this.getAttribute('data-number');
}
 * ***************************************/

/**************** */


var given1String = "";
var given2String = "";
var chosenOperation = "";
var answer = 0;
var numbers = document.getElementsByClassName('number');
var operations = document.getElementsByClassName('operation');

/* given numbers */
function showGiven() {

    if (chosenOperation == "") {
        given1String += this.getAttribute('data-number');
        document.getElementById('solution').innerHTML = given1String;
    } else {
        given2String += this.getAttribute('data-number');
        document.getElementById('solution').innerHTML = given1String + chosenOperation + given2String; 
    }
}

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', showGiven);
}


/* operation */

function usedOperation() {
    chosenOperation = this.getAttribute('data-operation');
    document.getElementById('solution').innerHTML = (given1String + chosenOperation);
}

for (j = 0; j < operations.length; j++) {
    operations[j].addEventListener('click', usedOperation);
}

function result() {
    if (chosenOperation == "+") {
        document.getElementById('answer').innerHTML = parseInt(given1String) + parseInt(given2String);
    } else if (chosenOperation == "-") {
        document.getElementById('answer').innerHTML = parseInt(given1String) - parseInt(given2String);
    } else if (chosenOperation == "x") {
        document.getElementById('answer').innerHTML = parseInt(given1String) * parseInt(given2String);
    } else if (chosenOperation == "÷") {
        document.getElementById('answer').innerHTML = parseInt(given1String) / parseInt(given2String);
    }
}

document.getElementById('equals').addEventListener('click', result);