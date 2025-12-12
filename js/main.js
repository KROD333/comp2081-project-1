// For the accordion functionality in the FAQ page
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const content = this.nextElementSibling;
        
        // Closes all other accordion items when one is opened
        accordionButtons.forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.setAttribute('aria-expanded', 'false');
                otherButton.nextElementSibling.style.maxHeight = '0';
                otherButton.nextElementSibling.style.padding = '0 1.5rem';
            }
        });
        
        // Toggles the current item
        if (isExpanded) {
            this.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = '0';
            content.style.padding = '0 1.5rem';
        } else {
            this.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '0 1.5rem 1.5rem';
        }
    });
});

