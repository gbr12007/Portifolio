const bola = document.querySelector('.bola');
const trilha = document.querySelector('.trilha');
const home = document.querySelector('#home');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social');

trilha.addEventListener('click', ()=>{
    trilha.classList.toggle('dark');
    document.body.classList.toggle('dark');
    home.classList.toggle('dark');
    nav.classList.toggle('dark');
    social.classList.toggle('dark');
})