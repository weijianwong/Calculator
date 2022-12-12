function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate(operator, x, y){
    return operator(x,y);
}
let arr = [];
let operatorsObj = {
    '+':add,
    '-':subtract,
    '/':divide,
    'x':multiply,
}
let value1;
let value2;
let result;

const screen = document.querySelector('.screen');
const resultScreen = document.querySelector('.result')
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click',()=>{
    for(const operator in operatorsObj){
        if(arr.includes(operator)){
            value1 = Number(arr.slice(0, arr.indexOf(operator)).join(''));
            value2 = Number(arr.slice(arr.indexOf(operator)+1,arr.length).join(''));
            result=operate(operatorsObj[operator],value1,value2);
            arr = [result];
}
    }
    arr.push('/');
    screen.textContent = arr.join('')
})
const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click',()=>{
    arr.pop();
    screen.textContent=arr.join('');
})
const plusMinusButton = document.querySelector('#plusMinus');
plusMinusButton.addEventListener('click',()=>{
    arr.unshift('-')
    screen.textContent=arr.join('');
})

// First Row Buttons
const button7 = document.querySelector('#button7');
button7.addEventListener('click', ()=>{
    arr.push(7);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button8 = document.querySelector('#button8');
button8.addEventListener('click', ()=>{
    arr.push(8);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button9 = document.querySelector('#button9');
button9.addEventListener('click', ()=>{
    arr.push(9);
    console.log(arr);
    screen.textContent = arr.join('');
});
const times = document.querySelector('#times');
times.addEventListener('click', ()=>{
    for(const operator in operatorsObj){
        if(arr.includes(operator)){
            value1 = Number(arr.slice(0, arr.indexOf(operator)).join(''));
            value2 = Number(arr.slice(arr.indexOf(operator)+1,arr.length).join(''));
            result=operate(operatorsObj[operator],value1,value2);
            arr = [result];
}
    }
    arr.push('x');
    screen.textContent = arr.join('')
})
//Second Row Buttons
const button4 = document.querySelector('#button4');
button4.addEventListener('click', ()=>{
    arr.push(4);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button5 = document.querySelector('#button5');
button5.addEventListener('click', ()=>{
    arr.push(5);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button6 = document.querySelector('#button6');
button6.addEventListener('click', ()=>{
    arr.push(6);
    console.log(arr);
    screen.textContent = arr.join('');
})
const minus =document.querySelector('#minus');
minus.addEventListener('click',()=>{
    for(const operator in operatorsObj){
        if(arr.includes(operator)){
            value1 = Number(arr.slice(0, arr.indexOf(operator)).join(''));
            value2 = Number(arr.slice(arr.indexOf(operator)+1,arr.length).join(''));
            result=operate(operatorsObj[operator],value1,value2);
            arr = [result];
}
    }
    arr.push('-');
    screen.textContent = arr.join('')
})
//Third Row Buttons
const button1 = document.querySelector('#button1');
button1.addEventListener('click', ()=>{
    arr.push(1);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button2 = document.querySelector('#button2');
button2.addEventListener('click', ()=>{
    arr.push(2);
    console.log(arr);
    screen.textContent = arr.join('');
})
const button3 = document.querySelector('#button3');
button3.addEventListener('click', ()=>{
    arr.push(3);
    console.log(arr);
    screen.textContent = arr.join('');
})
const plus = document.querySelector('#plus');
plus.addEventListener('click', ()=>{
    for(const operator in operatorsObj){
        if(arr.includes(operator)){
            value1 = Number(arr.slice(0, arr.indexOf(operator)).join(''));
            value2 = Number(arr.slice(arr.indexOf(operator)+1,arr.length).join(''));
            result=operate(operatorsObj[operator],value1,value2);
            arr = [result];
}
    }
    arr.push('+');
    screen.textContent = arr.join('');
})
//Fifth Row Buttons
const button0 = document.querySelector('#button0');
button0.addEventListener('click', ()=>{
    arr.push(0);
    console.log(arr);
    screen.textContent = arr.join('');
})
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', ()=>{
    arr.push('.');
    console.log(arr);
    screen.textContent = arr.join('');
})
const clearButton = document.querySelector('#AC');
clearButton.addEventListener('click', ()=>{
    screen.textContent='';
    resultScreen.textContent='';
    arr = [];
})

const equalButton = document.querySelector('#equal')
equalButton.addEventListener('click', ()=>{
    for(const operator in operatorsObj){
        if(arr.includes(operator)){
            value1 = Number(arr.slice(0, arr.indexOf(operator)).join(''));
            value2 = Number(arr.slice(arr.indexOf(operator)+1,arr.length).join(''));
            result=operate(operatorsObj[operator],value1,value2);
            resultScreen.textContent=result;
}}
})


