document.addEventListener('DOMContentLoaded', () => {
    // Update waktu
    function updateDateTime() {
        const timeElement = document.getElementById('current-time');
        const now = new Date();
        timeElement.textContent = now.toISOString().replace('T', ' ').substr(0, 19) + ' UTC';
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Animasi cards
    const cards = document.querySelectorAll('.education-card');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.classList.add('animate');
            }
        });
    }

    // Initial check
    setTimeout(checkScroll, 100);
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Back button functionality
    document.querySelector('.back-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
    });
});