// math

const scrollDown = document.querySelector('.down');
const scrollUp = document.querySelector('.up');

const mathFactsFour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mathFactsNine = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const gameBox = document.querySelector('.main-container');
const right = [
    { transform: "scale(100%)" },
    { transform: "scale(104%)" },
    { transform: "scale(100%)" },
]
const wrong = [
    { transform: "translateX(-2%)"},
    { transform: "translateX(2%)"},
    { transform: "translateX(-2%)"},
    { transform: "translateX(0%)"},
]
const animateDuration = {duration: 500};

window.addEventListener('load', function() {

    for (let i = 0; i < 10; i++) {
        const newDiv = document.createElement('div');
        const newMathDiv = document.createElement('div');
        const numOne = document.createElement('div');
        const oper = document.createElement('div');
        const numTwo = document.createElement('div');
        const entryBox = document.createElement('div');
        const entryInput = document.createElement('input');
        const submitButton = document.createElement('button');
        const questionNumber = document.createElement('div');
        const selectNumber = mathFactsFour[i];

        gameBox.append(newDiv);
        newDiv.classList.add('game-container-one');

        newDiv.append(newMathDiv);
        newMathDiv.classList.add('new-math-div');

        newMathDiv.appendChild(numOne);
        newMathDiv.appendChild(oper);
        newMathDiv.appendChild(numTwo);
        numOne.innerHTML = mathFactsFour[selectNumber];
        oper.innerHTML = '+';
        numTwo.innerHTML = mathFactsNine[selectNumber];
        
        newDiv.appendChild(entryBox);
        entryBox.classList.add('entry-container');

        entryBox.appendChild(entryInput);
        entryInput.classList.add('math-answer');

        entryBox.appendChild(submitButton);
        submitButton.classList.add('math-enter');
        submitButton.innerHTML = "check answer";

        newDiv.append(questionNumber);
        questionNumber.classList.add('question-number');

            for (n = 0; n <= i + 1; n++) {
                questionNumber.innerHTML = n;
            }

        const sum = mathFactsFour[selectNumber] + mathFactsNine[selectNumber];
        const containerOne = document.querySelectorAll('.game-container-one');

        submitButton.addEventListener ('click', function(){
             if (Number(entryInput.value) === sum) {
                containerOne[i].style.background = "linear-gradient(#74E365, #008000)";
                containerOne[i].animate(right, animateDuration);
            } else if (Number(entryInput.value) !== sum) {
                containerOne[i].animate(wrong, animateDuration);
            } else {
                
            }
        });
    };
});

scrollDown.addEventListener('click', function (){
    window.scrollBy({top: 342, left: 0, behavior: "smooth"},)
});

scrollUp.addEventListener('click', function (){
    window.scrollBy({top: -342, left: 0, behavior: "smooth"},)
});