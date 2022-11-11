//function that show the current date inside a div tag with id data
function currentDate() {
    let date = new Date();
    let showDate = (date.getMonth() + 1) + '-' + (date.getDay() - 1) + '-' + date.getFullYear();
    document.getElementById('data').innerHTML = showDate;
}

//function that adds your name to a text inside a div
function insertName(name) {
    let text = document.getElementById('msg').innerHTML + name;
    document.getElementById('msg').innerHTML = text;
}

//function that adds your name in a text box
function addName(name) {
    let msg = document.getElementById('txt');
    msg.value = name;
}

//function that take a number in a textbox em show it in a div after pressing a button
function getNumber() {

    let msg = document.getElementById('number');
    document.getElementById('showNumber').innerHTML = msg.value;
}

//function that create a list of number in the HTML page
function listCounter(num) {
    for (let i = 1; i <= num; i++) {
        let element = document.createElement("li");
        let numElement = document.createTextNode(i);
        element.appendChild(numElement);
        document.querySelector("#list-counter ul").appendChild(element);
    }
}

//function that show a list of html paragraph in a alert message
function fun() {
    let element = document.querySelectorAll('#message p');
    let array = '';

    element.forEach(el => {
        //change the text to "New Message" if text is "My message 4"
        if (el.textContent == 'My message 4') {
            el.textContent = 'New Message';
        }
        array += el.textContent + '\n';

    });
    alert(array);
}

//function that set de text color to red for minor to 5 and blue to major or igual to 5
function color(color) {
    if (color <= 5) count.style.color = 'red';
    else count.style.color = 'blue';
}

//function that increment the given number when a button is clicked
function incre() {
    let count = document.querySelector('#counter span');
    let countInt = parseInt(count.textContent);

    //increment till 10
    if (countInt < 10) countInt++;

    //change color
    color(countInt);

    count.textContent = countInt;
}

//function that decremente the given number when a button is clicked
function decre() {
    let count = document.querySelector('#counter span');
    let countInt = parseInt(count.textContent);

    //decrement till 1
    if (countInt > 1) countInt--;

    //change color
    color(countInt);

    count.textContent = countInt;
}

//function that set the given number to 1 when a button is clicked
function zerar() {
    document.querySelector('#count').textContent = 1;
}

//function that select a color from a drop-down list and set the color of a box
function color() {
    let se = document.querySelector('#select').value;
    document.querySelector('#box').style.backgroundColor = se;
}

//function that start a timer when a button is clicked
let interval
function timer() {
    document.querySelector('#timer button').setAttribute('disabled', true);
    let i = parseInt(document.querySelector('#timer span').textContent);

    interval = setInterval(function () {
        i++;
        if (i <= 10)
            document.querySelector('#timer span').textContent = i;
        else
            clearInterval(interval);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

//calculator
function calculator() {
    let number1 = parseInt(document.querySelector('#number1').value);
    let number2 = parseInt(document.querySelector('#number2').value);
    let operator = document.querySelector('#calculator select').value;
    let igual = document.querySelector('#calculator span');
    let result;

    if (operator == 'Add') result = number1 + number2;
    else if (operator == 'Subtract') result = number1 - number2;
    else if (operator == 'Multiply') result = number1 * number2;
    else if (operator == 'Divide') result = number1 / number2;

    igual.textContent = result;
}

//loto
function loto() {
    let lotoNumber = [];
    let numbers = [];
    let count = 0;
    let i;

    for (i = 0; i < 6; i++) {
        lotoNumber[i] = Math.floor(Math.random() * 100)+1;
        document.querySelector('#lotoNumber1').value = lotoNumber[0];
        document.querySelector('#lotoNumber2').value = lotoNumber[1];
        document.querySelector('#lotoNumber3').value = lotoNumber[2];
        document.querySelector('#lotoNumber4').value = lotoNumber[3];
        document.querySelector('#lotoNumber5').value = lotoNumber[4];
        document.querySelector('#lotoNumber6').value = lotoNumber[5];
    }
    console.log(lotoNumber);
    for (i = 0; i < 6; i++) {
        numbers[0] = parseInt(document.querySelector('#number1').value);
        numbers[1] = parseInt(document.querySelector('#number2').value);
        numbers[2] = parseInt(document.querySelector('#number3').value);
        numbers[3] = parseInt(document.querySelector('#number4').value);
        numbers[4] = parseInt(document.querySelector('#number5').value);
        numbers[5] = parseInt(document.querySelector('#number6').value);
        if (lotoNumber.includes(numbers[i])) count++;
    }
    console.log(numbers);
    console.log("POINTS: " + count)
    if (count == 0) document.querySelector('#span').textContent = 'YOU LOSE';
    if (count == 1) document.querySelector('#span').textContent = '1 POINTS';
    if (count == 2) document.querySelector('#span').textContent = '2 POINTS';
    if (count == 3) document.querySelector('#span').textContent = '3 POINTS';
    if (count == 4) document.querySelector('#span').textContent = '4 POINTS';
    if (count == 6) document.querySelector('#span').textContent = '5 POINTS';
    if (count == 6) document.querySelector('#span').textContent = 'YOU WIN';
}


//ball
let interval2
function ball(){
    
    let ball = document.querySelector('#ball');

    setInterval(()=> {
        ball.classList.toggle('hide');
        ball.style.top = Math.floor(Math.random()*100)+'px';
        ball.style.left = Math.floor(Math.random()*100)+'px';
    }, 2000);
}

function stop(){

}