// math

const math = document.querySelector('.math');
const mathInput = document.getElementById('math-answer');
const mathBtn = document.querySelector('.math-enter');
const mathResult = document.querySelector('.m-container');
const mathBg = document.getElementById('math-entry');

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

let randomMath = Math.floor(Math.random() * mathFacts.length);

mathBtn.addEventListener('click', function() {
    if(mathInput.value === mathFacts[randomMath].answer) {
        mathResult.innerHTML = 'correct!';

        mathBg.style.backgroundColor = '#7cfc00';
        
        mathResult.style.color = "green";
        mathResult.style.fontSize = "48px"

  /*       sectionFour.scrollIntoView({behavior: 'smooth'}); */
    } else {
        mathResult.innerHTML = 'sorry, try again';
        mathResult.style.color = "#AA767C";
        mathResult.style.backgroundColor = "#FFFFFF";
        mathResult.style.borderRadius = "10px";
        mathResult.style.fontSize = "48px"
        mathInput.value = "";
    }
});

window.addEventListener('load', function(){
    math.innerHTML = mathFacts[randomMath].question;
});