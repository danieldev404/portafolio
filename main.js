document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        { id: 'button1', class: 'transform-about', element: document.querySelector('.about') },
        { id: 'button2', class: 'transform-proyects', element: document.querySelector('.proyects') },
        { id: 'button3', class: 'transform-home', element: document.querySelector('.home') },
        { id: 'button4', class: 'transform-contact', element: document.querySelector('.contact') }
    ];

    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener('click', function() {
            resetClasses();
            button.element.classList.add(button.class);
        });
    });

    function resetClasses() {
        buttons.forEach(button => {
            button.element.classList.remove(button.class);
        });
    }
});