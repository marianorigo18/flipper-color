const colors = ["green", "red", "gray", "rgba(133, 122, 200)", "#f15025", "#C3C3C3"];

const button = document.querySelector('#btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(Math.floor(Math.random()* colors.length))
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
};