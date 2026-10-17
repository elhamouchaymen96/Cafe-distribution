document.addEventListener("DOMContentLoaded", () => {
    
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (openMenu && navMenu) {
        openMenu.addEventListener("click", () => {
            navMenu.style.right = "0";
        });
    }

    if (closeMenu && navMenu) {
        closeMenu.addEventListener("click", () => {
            navMenu.style.right = "-230px";
        });
    }

    const navLinks = document.querySelectorAll('#navMenu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 780 && navMenu) {
                navMenu.style.right = "-230px";
            }
        });
    });


    const categoryButtons = document.querySelectorAll('.cat-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hide'); 
                } else {
                    card.classList.add('hide'); 
                }
            });
        });
    });


    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(20, 13, 10, 0.95)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";
        }
    });


    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const title = card ? card.querySelector('h3').innerText : 'Produit';
            
            e.target.style.transform = "scale(0.95)";
            setTimeout(() => {
                e.target.style.transform = "scale(1)";
            }, 150);

            alert(`\Succès ! " ${title} " a été ajouté à votre panier.`);
        });
    });


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert("✉️ Merci ! Votre message a été envoyé avec succès, notre équipe vous contactera dans les plus brefs délais.");
            contactForm.reset(); 
        });
    }
});