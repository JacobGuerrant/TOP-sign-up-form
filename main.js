// User input variables
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPass');

// Error reporting variables
const firstnameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phonenumberError = document.querySelector('#phonenumber-error');
const passwordError = document.querySelector('#password-error');
const confirmPassError = document.querySelector('#confirmpass-error');

// Blank field handlers
firstName.addEventListener("input", function (event) {
    if (firstName.value === '') {
        firstnameError.textContent = 'Please enter your first name.';
    } else {
        firstnameError.textContent = '';
    }
});

lastName.addEventListener("input", function (event) {
    if (lastName.value === '') {
        lastNameError.textContent = 'Please enter your last name.';
    } else {
        lastNameError.textContent = '';
    }
});

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid e-mail.';
    } else {
        emailError.textContent = '';
    }
});

phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.typeMismatch) {
        phonenumberError.textContent = 'Please enter a valid phone number.';
    } else {
        phonenumberError.textContent = '';
    }
});

// Password field handling and confirm password matching
password.addEventListener("input", function (event) {
    if (password.value === '') {
        passwordError.textContent = 'Please enter a password.';
    } else {
        passwordError.textContent = '';
    }
});

confirmPass.addEventListener("input", function (event) {
    if (confirmPass.value !== password.value) {
        confirmPassError.textContent = 'Passwords do not match!';
    } else {
        confirmPassError.textContent = '';
    }
})