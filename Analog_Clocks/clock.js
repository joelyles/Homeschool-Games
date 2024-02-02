// variables

const clocks = document.querySelector('.clocks');
const input = document.getElementById('answer');
const btn = document.querySelector('.enter');


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

btn.addEventListener('click', function(){
    if(input.value === key){
        console.log('correct!');
    }
});