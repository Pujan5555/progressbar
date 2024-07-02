let click = document.querySelector('.btn');
let reset = document.querySelector('.reset');
let myInput = document.getElementById("input");
let progress = document.querySelector('#progressDone');
let score = 50;
let time = 3000 / score;
click.addEventListener('click', (e) => {
    let counter = 0;
    progress.classList.add('progress-bar');
    setInterval((e) => {
        if(counter < score){
            counter ++;
            progress.style.width = `${counter}%`;
            progress.innerText = `${counter}%`;
        }
    }, time);
    progress.style.height = "100%";
});
reset.addEventListener('click', (e) => {
    progress.classList.remove('progress-bar');
    progress.style.width = `${0}%`;
    progress.innerText = ``;
});
