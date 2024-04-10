document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('header'); // Select the <header> element
    
    header.addEventListener('click', function() {
        const randomColor = getRandomColor(); // Get a random color
        header.style.color = randomColor; // Apply the random color to the header text
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const contactForm = document.getElementById('contact-form'); // Assuming you have a form with id="contact-form"
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = contactForm.querySelector('input[name="email"]');
            if (emailInput && emailInput.value.trim() === '') {
                alert('Please enter your email address.');
                return;
            }

            const formData = new FormData(contactForm);
            fetch('https://example.com/submit-form', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Form submission successful:', data);
            })
            
            .catch(error => {
                console.error('Form submission error:', error);
                });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.color = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('active');
    });
});