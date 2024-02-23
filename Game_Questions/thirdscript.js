// math

const mathFactsFour = [0, 1, 2, 3, 4];
const mathFactsNine = [5, 6, 7, 8, 9];
const gameBox = document.querySelector('.main-container');

window.addEventListener('load', function() {

    for (let i = 0; i < 5; i++) {
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
        const selectNumberTwo = Math.floor(Math.random() * 5);

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

        const sum = mathFactsFour[selectNumber] + mathFactsNine[selectNumber];
        const containerOne = document.querySelectorAll('.game-container-one');

        submitButton.addEventListener ('click', function(){
             if (Number(entryInput.value) === sum) {
                containerOne[i].style.background = "linear-gradient(#74E365, #008000)";
            }
        });
    };
});



/* let randomMath = Math.floor(Math.random() * mathFacts.length);

mathBtn.addEventListener('click', function() {
    if(mathInput.value === mathFacts[randomMath].answer) {
        mathResult.innerHTML = 'correct!';

        mathBg.style.backgroundColor = '#7cfc00';
        
        mathResult.style.color = "green";
        mathResult.style.fontSize = "48px"

         sectionFour.scrollIntoView({behavior: 'smooth'});
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
}); */