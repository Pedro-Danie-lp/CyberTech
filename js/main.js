document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    function showSlides(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        slides[slideIndex].style.display = 'block';
    }
    
    prevBtn.addEventListener('click', function() {
        showSlides(--slideIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        showSlides(++slideIndex);
    });
    
    setInterval(function() {
        showSlides(++slideIndex);
    }, 5000);
    
    showSlides(slideIndex);
    
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
    
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});