// work on reload to top functionality
// clock face images to .svg
// clocks

/* const clocks = document.querySelector('.clock-face');
const timeInput = document.getElementById('time-answer');
const timeBtn = document.querySelector('.time-enter');
const timeResult = document.querySelector('.c-container');
const clockBg = document.getElementById('clock-entry'); */

const gameBox = document.querySelector('.main-container');
const mainContainer = document.querySelector('.m-container');

const clockFaces = [
    /* {
        time: `test`,
        picture: `<img src="images/clocks.png"/>`
    },   */
    {
        question: `1`,
        time: `1200`,
        picture: `<img src="images/clocks12.jpg"/>`
    },  {
        question: 2,
        time: `130`,
        picture: `<img src="images/clocks130.jpg"/>`
    },  {
        question: 3,
        time: `430`,
        picture: `<img src="images/clocks430.jpg"/>`
    },   {
        question: 4,
        time: `830`,
        picture: `<img src="images/clocks830.jpg"/>`
    },  {
        question: 5,
        time: `1030`,
        picture: `<img src="images/clocks1030.jpg"/>`
    },  {
        question: 6,
        time: `500`,
        picture: `<img src="images/clocks5.jpg"/>`
    },  {
        question: 7,
        time: `900`,
        picture: `<img src="images/clocks9.jpg"/>`
    }, {
        question: 8,
        time: `1100`,
        picture: `<img src="images/clocks11.jpg"/>`
    },
];

/* let random = Math.floor(Math.random() * clockFaces.length);
clocks.innerHTML = clockFaces[random].picture; */

window.addEventListener('load', function(){
    
    
    for (let i = 0; i < clockFaces.length; i++) {
        let newDiv = document.createElement('div');
        let entryBoxDiv = document.createElement('div');
        let entryInput = document.createElement('input');
        let submitButton = document.createElement('button');
        const questionNumber = document.createElement('div');

        newDiv.innerHTML = clockFaces[i].picture;
        gameBox.append(newDiv);
        newDiv.classList.add('game-container-one');

        questionNumber.innerHTML = clockFaces[i].question;
        newDiv.append(questionNumber);
        questionNumber.classList.add('question-number');

        entryBoxDiv.innerHTML = 'type answer below';
        newDiv.append(entryBoxDiv);
        entryBoxDiv.classList.add('entry-container');

        entryBoxDiv.append(entryInput);
        entryInput.classList.add('time-answer');

        entryBoxDiv.append(submitButton);
        submitButton.innerHTML = 'submit';
        submitButton.classList.add('time-enter');

        const gameContainerOne = document.querySelectorAll('.game-container-one');
            submitButton.addEventListener('click', function(){
                if(entryInput.value === clockFaces[i].time){
                    gameContainerOne[i].style.background = "linear-gradient(#74E365, #008000)";
                }    
            });
    };
});





//
/* timeBtn.addEventListener('click', function(){
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
}); */
//





// edited html - need to add button
/* const reload = document.querySelector('.reload');
reload.addEventListener('click', function(){
    location.reload();
}); */

/* in progress */
        /* reload.addEventListener('mouseup', function(){
            location.reload();
            headerTop.scrollIntoView({behavior: 'smooth'});
            
        });

        const newContainer = document.querySelector('.new-container');
        const backgrounds = document.querySelector(.)

        if(newContainer.innerHTML === "correct!") {
            document.body.style.backgroundColor = 'pink';
        }; */