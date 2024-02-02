// clocks

const clocks = document.querySelector('.clocks');
const timeInput = document.getElementById('time-answer');
const timeBtn = document.querySelector('.time-enter');
const timeResult = document.querySelector('.c-container');

        //add photos to display clock faces

const clockFaces = [
    {
        time: `12:00`,
        displayedTime: `12:00`
    },  {
        time: `1:30`,
        displayedTime: `1:30`
    },  {
        time: `3:00`,
        displayedTime: `3:00`
    },  {
        time: `5:30`,
        displayedTime: `5:30`
    }, 
];

// spelling

const spelling = document.querySelector('.spelling');
const spellingInput = document.getElementById('spelling-answer');
const spellingBtn = document.querySelector('.spelling-enter');
const spellingResult = document.querySelector('.s-container');

        //add photos to spelling words

const spellingWords = [
    {
        word: `cat`,
        displayedWord: `cat`
    },  {
        word: `horse`,
        displayedWord: `horse`
    },  {
        word: `barn`,
        displayedWord: `barn`
    },  {
        word: `mouse`,
        displayedWord: `mouse`
    },  {
        word: `bat`,
        displayedWord: `bat`
    },  {
        word: `bird`,
        displayedWord: `bird`
    },  {
        word: `snake`,
        displayedWord: `snake`
    },  {
        word: `boat`,
        displayedWord: `boat`
    }, 
];

// math facts

const math = document.querySelector('.math');
const mathInput = document.getElementById('math-answer');
const mathBtn = document.querySelector('.math-enter');
const mathResult = document.querySelector('.m-container');

const mathFacts = [
    {
        question: `1 + 1`,
        answer: `2`
    }, {
        question: `2 + 4`,
        answer: `6`
    }, {
        question: `3 + 3`,
        answer: `6`
    }, {
        question: `4 + 4`,
        answer: `8`
    }, {
        question: `9 + 1`,
        answer: `10`
    }, {
        question: `5 + 4`,
        answer: `9`
    }, {
        question: `7 + 1`,
        answer: `8`
    }, 
];

/* logic below */

let random = Math.floor(Math.random() * clockFaces.length);
let randomWords = Math.floor(Math.random() * spellingWords.length)
let randomMath = Math.floor(Math.random() * mathFacts.length)

window.addEventListener('load', function(){
    clocks.innerHTML = clockFaces[random].displayedTime;
    spelling.innerHTML = spellingWords[randomWords].displayedWord;
    math.innerHTML = mathFacts[randomMath].question;
});

timeBtn.addEventListener('click', function(){
    if(timeInput.value === clockFaces[random].displayedTime){
        timeResult.textContent = "correct!";
        timeResult.style.color = "green";
        timeResult.style.fontSize = "32px"
    } else {
        timeResult.textContent = "sorry, try again."
        timeResult.style.color = "red";
        timeResult.style.fontSize = "32px"
    }
});

spellingBtn.addEventListener('click', function(){
    if(spellingInput.value === spellingWords[randomWords].displayedWord){
        spellingResult.textContent = "correct!";
        spellingResult.style.color = "green";
        spellingResult.style.fontSize = "32px"
    } else {
        spellingResult.textContent = "sorry, try again.";
        spellingResult.style.color = "red";
        spellingResult.style.fontSize = "32px"
    }
});

mathBtn.addEventListener('click', function() {
    if(mathInput.value === mathFacts[randomMath].answer) {
        mathResult.innerHTML = 'correct!';
        mathResult.style.color = "green";
        mathResult.style.fontSize = "32px"
    } else {
        mathResult.innerHTML = 'sorry, try again';
        mathResult.style.color = "red";
        mathResult.style.fontSize = "32px"
    }
});