// math

/* const math = document.querySelector('.math');
const mathInput = document.getElementById('math-answer');
const mathBtn = document.querySelector('.math-enter');
const mathResult = document.querySelector('.m-container');
const mathBg = document.getElementById('math-entry');
 */
const mathFactsFour = [0, 1, 2, 3, 4];
const mathFactsNine = [5, 6, 7, 8, 9];



const gameBox = document.querySelector('.math-container');

window.addEventListener('load', function() {

    for (let i = 0; i < mathFactsFour.length; i++) {
        const newDiv = document.createElement('div');
        const numOne = document.createElement('div');
        const oper = document.createElement('div');
        const numTwo = document.createElement('div');
        const entryBox = document.createElement('div');
        const entryInput = document.createElement('input');
        const submitButton = document.createElement('button');
        const questionNumber = document.createElement('div');
        const selectNumber = Math.floor(Math.random() * 5);
        const selectNumberTwo = Math.floor(Math.random() * 5);

        gameBox.append(newDiv);
        newDiv.appendChild(numOne);
        newDiv.appendChild(oper);
        newDiv.appendChild(numTwo);
        numOne.innerHTML = mathFactsFour[selectNumber];
        oper.innerHTML = '+';
        numTwo.innerHTML = mathFactsNine[selectNumber];

        newDiv.classList.add('game-container-math');
        gameBox.classList.add('math-container');
        
    }
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