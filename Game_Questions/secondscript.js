// spelling

const gameBox = document.querySelector('.main-container');

const spellingWords = [
    {
        id: 1,
        answer: `cat`,
        // cat photo by Kabo on Unsplash
        pic:   `<img src="images/kabo.jpg"/>`
    } ,  {
        id: 2,
        answer: `horse`,
        pic:   `<img src="images/magdalena-smolnicka.jpg"/>`
        // horse photo by Magdalena Smolnicka on Unsplash
    },  {
        id: 3,
        answer: `barn`,
        pic: `<img src="images/remmington-wanner.jpg"/>`
        // barn photo by Remmington Wanner on Unsplash
    },  {
        id: 4,
        answer: `mouse`,
        pic: `<img src="images/glen-hooper.jpg"/>`
        // mouse photo by Glen Hooper on Unsplash
    },  {
        id: 5,
        answer: `bat`,
        pic: `<img src="images/geoff-brooks.jpg"/>`
        // bat photo by Geoff Brooks on Unsplash
    },  {
        id: 6,
        answer: `bird`,
        pic: `<img src="images/timothy-dykes.jpg"/>`
        // bird photo by Timothy Dykes on Unsplash
    },  {
        id: 7,
        answer: `deer`,
        pic: `<img src="images/laura-college.jpg"/>`
        // deer photo by Laura College on Unsplash
    },  {
        id: 8,
        answer: `boat`,
        pic: `<img src="images/dusan-veverkolog.jpg"/>`
        // boat photo by Dusan Veverkolog on Unsplash
    },
];

window.addEventListener('load', function(){

    for (let i = 0; i < spellingWords.length; i++) {
        const newDiv = document.createElement('div');
        const entryBox = document.createElement('div');
        const entryInput = document.createElement('input');
        const submitButton = document.createElement('button');
        const questionNumber = document.createElement('div');

        newDiv.innerHTML = spellingWords[i].pic;
        gameBox.append(newDiv);
        newDiv.classList.add('game-container-one');

        newDiv.append(entryBox, questionNumber);
        entryBox.innerHTML = 'type correct spelling below';
        entryBox.classList.add('entry-container');

        entryBox.append(entryInput);
        entryInput.classList.add('spelling-answer');

        entryBox.append(submitButton);
        submitButton.classList.add('spelling-enter');
        submitButton.innerHTML = "check spelling";

        questionNumber.innerHTML = spellingWords[i].id;
        questionNumber.classList.add('question-number');

        const gameContainerOne = document.querySelectorAll('.game-container-one');
            submitButton.addEventListener('click', function(){
                if(entryInput.value.toLowerCase() === spellingWords[i].answer){
                    gameContainerOne[i].style.background = "linear-gradient(#74E365, #008000)";
                    gameContainerOne[i].classList = 'game-container-one';
                } else { 
                    gameContainerOne[i].classList.toggle("active");
                }
            });   
    }; 
});