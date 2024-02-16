// spelling

/* const spelling = document.querySelector('.spelling');
const spellingInput = document.getElementById('spelling-answer');
const spellingBtn = document.querySelector('.spelling-enter');
const spellingResult = document.querySelector('.s-container');
const spellingBg = document.getElementById('spelling-entry'); */

const gameBox = document.querySelector('.main-container');

const spellingWords = [
    {
        id: 1,
        word: `cat`,
        // cat photo by Kabo on Unsplash
        pic:   `<img src="images/kabo.jpg"/>`
    } ,  {
        id: 2,
        word: `horse`,
        pic:   `<img src="images/magdalena-smolnicka.jpg"/>`
        // horse photo by Magdalena Smolnicka on Unsplash
    },  {
        id: 3,
        word: `barn`,
        pic: `<img src="images/remmington-wanner.jpg"/>`
        // barn photo by Remmington Wanner on Unsplash
    },  {
        id: 4,
        word: `mouse`,
        pic: `<img src="images/glen-hooper.jpg"/>`
        // mouse photo by Glen Hooper on Unsplash
    },  {
        id: 5,
        word: `bat`,
        pic: `<img src="images/geoff-brooks.jpg"/>`
        // bat photo by Geoff Brooks on Unsplash
    },  {
        id: 6,
        word: `bird`,
        pic: `<img src="images/timothy-dykes.jpg"/>`
        // bird photo by Timothy Dykes on Unsplash
    },  {
        id: 7,
        word: `deer`,
        pic: `<img src="images/laura-college.jpg"/>`
        // deer photo by Laura College on Unsplash
    },  {
        id: 8,
        word: `boat`,
        pic: `<img src="images/dusan-veverkolog.jpg"/>`
        // boat photo by Dusan Veverkolog on Unsplash
    },
];

window.addEventListener('load', function() {
    for (i = 0; i < spellingWords.length; i++) {
        const newDiv = document.createElement('div');
        const entryBox = document.createElement('div');
        const entryInput = document.createElement('input');
        const submitButton = document.createElement('button');
        const questionNumber = document.createElement('div');

        gameBox.append(newDiv);
        newDiv.innerHTML = spellingWords[i].pic;
        newDiv.classList.add('game-container-one');

        newDiv.append(entryBox);
        entryBox.innerHTML = 'type correct spelling below';
        entryBox.classList.add('entry-container');

        entryBox.append(entryInput, submitButton);
        entryInput.classList.add('time-answer');

    }
 

})


/* let randomWords = Math.floor(Math.random() * spellingWords.length);

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
}); */