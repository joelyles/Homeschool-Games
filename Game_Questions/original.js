                    // clocks

const clocks = document.querySelector('.clock-face');
const timeInput = document.getElementById('time-answer');
const timeBtn = document.querySelector('.time-enter');
const timeResult = document.querySelector('.c-container');
const clockBg = document.getElementById('clock-entry');

let random = Math.floor(Math.random() * clockFaces.length);
clocks.innerHTML = clockFaces[random].picture;

//
timeBtn.addEventListener('click', function(){
    if(timeInput.value === clockFaces[random].time){
        timeResult.textContent = "correct!";

        clockBg.style.backgroundColor = '#7cfc00';

        timeResult.style.color = "green";
        timeResult.style.fontSize = "48px"
        sectionTwo.scrollIntoView({behavior: 'smooth'});
    } else {
        timeResult.textContent = "sorry, try again."
        timeResult.style.color = "red";
        timeResult.style.fontSize = "48px";
        timeInput.value = "";
    }
});
//

// edited html - need to add button
/* const reload = document.querySelector('.reload');
reload.addEventListener('click', function(){
    location.reload();
}); */

/* in progress */
        reload.addEventListener('mouseup', function(){
            location.reload();
            headerTop.scrollIntoView({behavior: 'smooth'});
            
        });

        const newContainer = document.querySelector('.new-container');
        /* const backgrounds = document.querySelector() */

        if(newContainer.innerHTML === "correct!") {
            document.body.style.backgroundColor = 'pink';
        };


                    // spelling

const spelling = document.querySelector('.spelling');
const spellingInput = document.getElementById('spelling-answer');
const spellingBtn = document.querySelector('.spelling-enter');
const spellingResult = document.querySelector('.s-container');
const spellingBg = document.getElementById('spelling-entry');

let randomWords = Math.floor(Math.random() * spellingWords.length);

spellingBtn.addEventListener('click', function(){
    if(spellingInput.value.toLowerCase() === spellingWords[randomWords].word){
        spellingResult.textContent = "correct!";

        spellingBg.style.backgroundColor = '#7cfc00';

        spellingResult.style.color = "green";
        spellingResult.style.fontSize = "48px"
        sectionThree.scrollIntoView({behavior: 'smooth'});
    } else {
        spellingResult.textContent = "sorry, try again.";
        spellingResult.style.color = "red";
        spellingResult.style.fontSize = "48px"
        spellingInput.value = "";
    }
});

window.addEventListener('load', function(){
    spelling.innerHTML = spellingWords[randomWords].pic;
});

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