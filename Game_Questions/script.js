// clocks

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