// work on reload to top functionality
// clock face images to .svg
// clocks

const clocks = document.querySelector('.clock-face');
const timeInput = document.getElementById('time-answer');
const timeBtn = document.querySelector('.time-enter');
const timeResult = document.querySelector('.c-container');
const clockBg = document.getElementById('clock-entry');

const mainContainer = document.querySelector('.m-container');

const clockFaces = [
    {
        time: `test`,
        picture: `<img src="images/clocks.png"/>`
    },  {
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

let random = Math.floor(Math.random() * clockFaces.length);

window.addEventListener('load', function(){
    clocks.innerHTML = clockFaces[random].picture;
            /*  */
    let firstQuestion = clockFaces[0].picture;
    
    for (let i = 0; i < clockFaces.length; i++) {
        let newDiv = document.createElement('div');
// how to iterate through array sequentially instead of random
        newDiv.innerHTML = clockFaces[random].picture;
        mainContainer.append(newDiv);
        newDiv.classList.add('left-container');
    }
});

timeBtn.addEventListener('click', function(){
    if(timeInput.value === clockFaces[random].time){
        timeResult.textContent = "correct!";

        clockBg.style.backgroundColor = '#7cfc00';

        timeResult.style.color = "green";
        timeResult.style.fontSize = "48px"
        /* sectionTwo.scrollIntoView({behavior: 'smooth'}); */
    } else {
        timeResult.textContent = "sorry, try again."
        timeResult.style.color = "red";
        timeResult.style.fontSize = "48px";
        timeInput.value = "";
    }
});

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