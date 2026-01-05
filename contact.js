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

/**
 * validateEmail() - Check if email format is valid (contains @ and domain)
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * validateMessage() - Check if message is at least 20 characters long
 */
function validateMessage(message) {
    return message.trim().length >= 20;
}

// Error message elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');
const characterCounter = document.getElementById('characterCounter');
const successMessage = document.getElementById('successMessage');

/**
 * showError() - Display error message below the field
 */
function showError(inputElement, errorElement, errorText) {
    inputElement.classList.add('input-error');
    inputElement.classList.remove('input-valid');
    errorElement.textContent = errorText;
    errorElement.classList.add('show');
}

/**
 * clearError() - Remove error message when field is valid
 */
function clearError(inputElement, errorElement) {
    inputElement.classList.remove('input-error');
    inputElement.classList.add('input-valid');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

/**
 * clearForm() - Clear all form fields after successful submission
 */
function clearForm() {
    contactForm.reset();
    
    // Remove validation classes
    [firstNameInput, lastNameInput, emailInput, subjectInput, phoneInput, messageInput].forEach(input => {
        input.classList.remove('input-valid', 'input-error');
    });

    // Reset character counter
    updateCharacterCounter();
}

// Real-time Character Counter
function updateCharacterCounter() {
    const messageLength = messageInput.value.length;
    characterCounter.textContent = `${messageLength} / 20 characters`;

    if (messageLength < 20) {
        characterCounter.classList.add('below-minimum');
        characterCounter.classList.remove('valid');
    } else {
        characterCounter.classList.remove('below-minimum');
        characterCounter.classList.add('valid');
    }
}

// Event Listener for Real-time Character Counter
messageInput.addEventListener('input', updateCharacterCounter);

// Form Submission
contactForm.addEventListener('submit', function(event) {
    // Prevent page reload when form is submitted
    event.preventDefault();

    let isValid = true;

    // Validate First Name
    if (firstNameInput.value.trim() === '') {
        isValid = false;
    } else if (!validateName(firstNameInput.value)) {
        isValid = false;
    }

    // Validate Last Name
    if (lastNameInput.value.trim() === '') {
        isValid = false;
    } else if (!validateName(lastNameInput.value)) {
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        isValid = false;
    }

    // Validate Subject
    if (subjectInput.value === '') {
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        isValid = false;
    } else if (!validateMessage(messageInput.value)) {
        isValid = false;
    }

    if (isValid) {
        // Show success message
        const firstName = firstNameInput.value.trim();
        successMessage.textContent = `Thank you ${firstName}! I will contact you soon!`;
        successMessage.classList.add('show');

        // Clear form
        clearForm();

        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 3000);
    }
});
