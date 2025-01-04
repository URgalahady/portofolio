document.addEventListener('DOMContentLoaded', () => {
    // Animate profile card
    setTimeout(() => {
        document.querySelector('.profile-card').classList.add('animate');
    }, 200);

    // Animate name and title
    setTimeout(() => {
        document.querySelector('.name').classList.add('animate');
    }, 500);

    setTimeout(() => {
        document.querySelector('.title').classList.add('animate');
    }, 700);

    // Animate stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.classList.add('animate');
        }, 900 + (index * 200));
    });

    // Animate counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = Math.floor(Math.random() * 100) + 50; // Random number between 50 and 150
        let count = 0;
        const timer = setInterval(() => {
            if(count < target) {
                count++;
                counter.textContent = count;
            } else {
                clearInterval(timer);
            }
        }, 20);
    });

    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    setTimeout(() => {
        skillLevels.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = `${level}%`;
        });
    }, 1500);

    // Animate social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('animate');
        }, 2000 + (index * 200));
    });
});

// Tambahan animasi saat scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.profile-bio, .profile-skills');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Tambahkan di awal file JavaScript
document.querySelector('.back-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.history.back();
});