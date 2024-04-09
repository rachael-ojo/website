// Add JavaScript functionality here
// Example: Toggle visibility of sections

const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('active');
    });
});