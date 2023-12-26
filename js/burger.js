document.addEventListener('DOMContentLoaded', function() {
    // Obtient les références de l'Icône du Menu Burger et du Menu de Navigation
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    // Ajoute un écouteur d'événement au clic sur l'Icône du Menu Burger
    burgerIcon.addEventListener('click', function() {
        // Bascule la classe 'active' pour afficher/masquer le Menu de Navigation
        menu.classList.toggle('active');
    });
});
