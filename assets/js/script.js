document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Validate the form
        let isValid = validateForm();

        if (isValid) {
            // If the form is valid, you can submit it or show a success message
            alert('Your message was submitted! Thank you for contact me.');
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        const name = document.getElementById('name').value;
        if (name === '') {
            alert('Name is required.');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate message
        const message = document.getElementById('message').value;
        if (message === '') {
            alert('Message is required.');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
