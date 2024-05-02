document.addEventListener("DOMContentLoaded", function() {
    // Votre code pour les mobiles ici
    const hamburgerIcon = document.querySelector('.icon-hamburger');
    const closeIcon = document.querySelector('.icon-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const testimonialsContainer = document.querySelector(".testimonials-carousel");
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    // Fonction pour afficher le menu mobile et l'overlay
    function openMobileMenu() {
        overlay.style.display = 'block';
        mobileMenu.style.display = 'flex';
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }

    // Fonction pour fermer le menu mobile et l'overlay
    function closeMobileMenu() {
        overlay.style.display = 'none';
        mobileMenu.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }

    // Ajoutez un écouteur d'événements au clic sur l'icône hamburger
    hamburgerIcon.addEventListener('click', openMobileMenu);

    // Ajoutez un écouteur d'événements au clic sur l'icône close
    closeIcon.addEventListener('click', closeMobileMenu);

    function handleTestimonialsDisplay() {
        if (window.innerWidth <= 1000) {
            let index = 0;
            
            // Fonction pour afficher le témoignage actuel
            function showTestimonial(index) {
                testimonials.forEach(testimonial => testimonial.style.display = "none");
                testimonials[index].style.display = "block";
            }
            
            // Affiche le premier témoignage
            showTestimonial(index);
            
            // Fonction pour afficher le témoignage précédent
            function showPrevTestimonial() {
                index = (index === 0) ? testimonials.length - 1 : index - 1;
                showTestimonial(index);
                updateActiveDot(index); // Mettre à jour les dots
            }

            // Fonction pour afficher le témoignage suivant
            function showNextTestimonial() {
                index = (index + 1) % testimonials.length;
                showTestimonial(index);
                updateActiveDot(index); // Mettre à jour les dots
            }
            
            // Ajoute des gestionnaires d'événements pour les boutons de navigation
            prevButton.addEventListener("click", showPrevTestimonial);
            nextButton.addEventListener("click", showNextTestimonial);

            function updateActiveDot(currentIndex) {
                var dots = document.querySelectorAll('.dot');
                dots.forEach(function(dot, index) {
                    if (index === currentIndex) {
                        dot.classList.add('active-dot');
                    } else {
                        dot.classList.remove('active-dot');
                    }
                });
            }
        } else if (window.innerWidth > 1000) {
            testimonialsContainer.style.display = "flex";
            testimonials.forEach(testimonial => testimonial.style.display = "block");
        }
    }

// Exécuter la fonction au chargement de la page et lors du redimensionnement de la fenêtre
handleTestimonialsDisplay();
window.addEventListener('resize', handleTestimonialsDisplay);

const emailInput = document.querySelector('.news input[type="email"]');
const submitButton = document.querySelector('.submit-btn');
const errorText = document.createElement('p');
errorText.classList.add('error-text');
emailInput.parentElement.appendChild(errorText);



submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        emailInput.classList.add('error-input');
        errorText.textContent = 'Please enter your email address';
        return;
    }
    if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('error-input');
        errorText.textContent = 'Please insert a valid email';
        return;
    }else{
        emailInput.classList.remove('error-input');
    }
    errorText.textContent = '';
    emailInput.value = '';
    });
});