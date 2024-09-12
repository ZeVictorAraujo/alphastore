document.addEventListener("DOMContentLoaded", function() {
    // Captura os elementos do menu
    const menuHome = document.getElementById('menu-home');
    const menuContato = document.getElementById('menu-contato');
    const homeSection = document.getElementById('home-section');
    const contactSection = document.getElementById('contact-section');

    // Mostrar Home ao clicar no menu "INÍCIO"
    menuHome.addEventListener('click', function() {
        homeSection.style.display = 'block';
        contactSection.style.display = 'none';
    });

    // Mostrar Contato ao clicar no menu "CONTATO"
    menuContato.addEventListener('click', function() {
        homeSection.style.display = 'none';
        contactSection.style.display = 'block';
    });
});
