// clocks

const clocks = document.querySelector('.clock-face');
const timeInput = document.getElementById('time-answer');
const timeBtn = document.querySelector('.time-enter');
const timeResult = document.querySelector('.c-container');

        //add photos to display clock faces

const clockFaces = [
    {
        time: `1200`,
        picture: `<img src="images/clocks12.jpg"/>`
    },  {
        time: `130`,
        picture: `<img src="images/clocks130.jpg"/>`
    },  {
        time: `430`,
        picture: `<img src="images/clocks430.jpg"/>`
    },  {
        time: `830`,
        picture: `<img src="images/clocks830.jpg"/>`
    },  {
        time: `1030`,
        picture: `<img src="images/clocks1030.jpg"/>`
    },  {
        time: `500`,
        picture: `<img src="images/clocks5.jpg"/>`
    },  {
        time: `900`,
        picture: `<img src="images/clocks9.jpg"/>`
    }, {
        time: `1100`,
        picture: `<img src="images/clocks11.jpg"/>`
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
        // cat photo by Kabo on Unsplash
        pic:   `<img src="images/kabo.jpg"/>`
    } ,  {
        word: `horse`,
        pic:   `<img src="images/magdalena-smolnicka.jpg"/>`
        // horse photo by Magdalena Smolnicka on Unsplash
    },  {
        word: `barn`,
        pic: `<img src="images/remmington-wanner.jpg"/>`
        // barn photo by Remmington Wanner on Unsplash
    },  {
        word: `mouse`,
        pic: `<img src="images/glen-hooper.jpg"/>`
        // mouse photo by Glen Hooper on Unsplash
    },  {
        word: `bat`,
        pic: `<img src="images/geoff-brooks.jpg"/>`
        // bat photo by Geoff Brooks on Unsplash
    },  {
        word: `bird`,
        pic: `<img src="images/timothy-dykes.jpg"/>`
        // bird photo by Timothy Dykes on Unsplash
    },  {
        word: `deer`,
        pic: `<img src="images/laura-college.jpg"/>`
        // deer photo by Laura College on Unsplash
    },  {
        word: `boat`,
        pic: `<img src="images/dusan-veverkolog.jpg"/>`
        // boat photo by Dusan Veverkolog on Unsplash
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
let randomWords = Math.floor(Math.random() * spellingWords.length);
let randomMath = Math.floor(Math.random() * mathFacts.length);

window.addEventListener('load', function(){
    clocks.innerHTML = clockFaces[random].picture;
    spelling.innerHTML = spellingWords[randomWords].pic;
    math.innerHTML = mathFacts[randomMath].question;
});

timeBtn.addEventListener('click', function(){
    if(timeInput.value === clockFaces[random].time){
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
    if(spellingInput.value === spellingWords[randomWords].word){
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