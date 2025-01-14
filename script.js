const bola = document.querySelector('.bola');
const trilha = document.querySelector('.trilha');
const home = document.querySelector('#home');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social');
const modeDark = document.querySelector('.trilha p');

function trocarModo(){
    modeDark.innerText = modeDark.innerText === 'Dark' ? 'Light' : 'Dark';
}

trilha.addEventListener('click', ()=>{
    bola.classList.toggle('dark');
    trocarModo();
    bola.classList.toggle('no-after');
    trilha.classList.toggle('dark');
    document.body.classList.toggle('dark');
    home.classList.toggle('dark');
    nav.classList.toggle('dark');
    social.classList.toggle('dark');
})