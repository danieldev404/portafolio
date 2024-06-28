document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const about = document.querySelector('.about');

    button1.addEventListener('click', function() {
        about.classList.toggle('transform-about');
    });
    const button2 = document.getElementById('button2');
    const proyects = document.querySelector('.proyects');

    button2.addEventListener('click', function() {
        proyects.classList.toggle('transform-proyects');
    });
    const button3 = document.getElementById('button3');
    const home = document.querySelector('.home');

    button3.addEventListener('click', function() {
        home.classList.toggle('transform-home');
    });
    const button4 = document.getElementById('button4');
    const contact = document.querySelector('.contact');

    button4.addEventListener('click', function() {
        contact.classList.toggle('transform-contact');
    });
});