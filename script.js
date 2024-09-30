document.addEventListener("DOMContentLoaded", function() {
    // Captura os elementos do menu
    const menuHome = document.getElementById('menu-home');
    const menuContato = document.getElementById('menu-contato');
    const homeSection = document.getElementById('home-section');
    const contactSection = document.getElementById('contact-section');
    const buttoncar = document.getElementById('carrinho');
    const buttoncarSection = this.getElementById('carrinho-section')

    // Mostrar Home ao clicar no menu "INÍCIO"
    menuHome.addEventListener('click', function() {
        homeSection.style.display = 'block';
        contactSection.style.display = 'none';
        buttoncarSection.style.display = 'none';
    });

    // Mostrar Contato ao clicar no menu "CONTATO"
    menuContato.addEventListener('click', function() {
        homeSection.style.display = 'none';
        contactSection.style.display = 'block';
        buttoncarSection.style.display = 'none';
    });

    buttoncar.addEventListener('click', function() {
        homeSection.style.display = 'none';
        contactSection.style.display = 'none';
        buttoncarSection.style.display = 'block';
    })

});
