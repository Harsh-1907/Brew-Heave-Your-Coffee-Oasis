document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event listeners for scrolling to each section
    document.getElementById('coffeeBtn').addEventListener('click', function () {
        scrollToSection('coffee-products');
    });

    document.getElementById('muffinsBtn').addEventListener('click', function () {
        scrollToSection('muffin-products');
    });

    document.getElementById('cookiesBtn').addEventListener('click', function () {
        scrollToSection('cookie-products');
    });

    document.getElementById('donutsBtn').addEventListener('click', function () {
        scrollToSection('donut-products');
    });

    // Form submission handling
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // If the form is valid, submit it
            this.submit();
        }
    });

    // Toggle additional description in the About section
    const readMoreBtn = document.getElementById('read-more-btn');
    const additionalDescription = document.getElementById('additional-description');

    readMoreBtn.addEventListener('click', function () {
        // Toggle the visibility of the additional description
        additionalDescription.style.display = additionalDescription.style.display === 'none' ? 'block' : 'none';
        readMoreBtn.textContent = additionalDescription.style.display === 'none' ? 'Read More' : 'Read Less';
    });

    // Function to validate form inputs
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const suggestions = document.getElementById('suggestions').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        const overallExperience = document.getElementById('overallExperience').value;

        // Validate name
        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate suggestions
        if (suggestions === '') {
            alert('Please provide your suggestions.');
            return false;
        }

        // Validate rating
        if (!rating) {
            alert('Please select a rating.');
            return false;
        }

        // Validate overall experience
        if (overallExperience === '') {
            alert('Please select your overall experience.');
            return false;
        }

        // All validations passed
        return true;
    }
});
