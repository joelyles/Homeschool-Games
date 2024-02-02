// variables

const clocks = document.querySelector('.clocks');
const input = document.getElementById('answer');
const btn = document.querySelector('.enter');
const result = document.querySelector('.new-container');
const stars = document.getElementsByClassName('.stars');

// access each star box by id to add block display

//add photos to display clock faces
const clockFaces = [
    {
        time: `12:00`,
        displayedTime: `12:00`
    },  {
        time: `1:30`,
        displayedTime: `1:30`
    },  {
        time: `3:00`,
        displayedTime: `3:00`
    },  {
        time: `3:00`,
        displayedTime: `3:00`
    }, 
];

const key = clockFaces[0].time;


window.addEventListener('load', function(){
    clocks.innerHTML = clockFaces[0].displayedTime;
});


// HTML for star is &#9734 or -33;


btn.addEventListener('click', function(){
    if(input.value === key){
        result.textContent = "correct!";
        stars.style.display = 'block';
    } else {
        result.textContent = "sorry, try again."
    }
});