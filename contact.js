// DOM Selection - Get references to all form elements
const contactForm = document.getElementById('contactForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Validation Functions

/**
 * validateName() - Check if name contains only letters (no numbers or special characters)
 */
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s'-]{1,}$/;
    return nameRegex.test(name.trim());
}
