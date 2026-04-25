/**
 * Dra. Ana Silva - Main JavaScript
 * Contém a lógica de navegação mobile e manipulação do formulário de contato.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Menu Mobile ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // --- Manipulação do Formulário de Contato ---
    const contatoForm = document.querySelector('.contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Aqui seria implementada a lógica de envio real
            // Para demonstração, apenas exibimos um alerta
            alert('Mensagem enviada com sucesso! (Demonstração de segurança implementada)');
            
            // Limpa o formulário após o envio simulado
            contatoForm.reset();
        });
    }
});
