const bola = document.querySelector('.bola');
const trilha = document.querySelector('.trilha');
const home = document.querySelector('#home');

trilha.addEventListener('click', ()=>{
    trilha.classList.toggle('dark');
    document.body.classList.toggle('dark');
    home.classList.toggle('dark');
})