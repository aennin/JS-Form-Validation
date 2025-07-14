const form = document.getElementById('browser-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const postalInput = document.getElementById('postal-code');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');

function showError(input, message) {
    input.classList.add('error');
    const errorSpan = document.getElementById(`${input.id}-error`);
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

function clearError(input) {
    input.classList.remove('error');
    const errorSpan = document.getElementById(`${input.id}-error`);
    if (errorSpan) {
        errorSpan.textContent = "";
    }
}

function validateName() {
    const value = nameInput.value.trim();
    if(!value) {
        showError(nameInput, "Name is required");
        return false;
    }
    clearError(nameInput);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!value || !emailPattern.test(value)) {
        showError(emailInput, 'Please enter a valid email.');
        return false;
    }
    clearError(emailInput);
    return true;
}

function validatePostalCode() {
    const value = postalInput.value.trim();
    const country = countryInput.value;
    const patterns = {
        ch: /^\d{4}$/,
        fr: /^\d{5}$/,
        de: /^\d{5}$/,
        nl: /^\d{4}\s?[A-Z]{2}$/,
        it: /^\d{5}$/
    };

    if (!patterns[country].test(value)) {
        showError(postalInput, `Invalid postal code for ${country.toUpperCase()}.`);
        return false;
    }

    clearError(postalInput);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    if (value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        return false;
    }
    clearError(passwordInput);
    return true;
}

function validateRepeatPassword() {
    const password = passwordInput.value;
    const repeat = repeatPasswordInput.value;

    if (password !== repeat) {
        showError(repeatPasswordInput, 'Password do not match.');
        return false;
    }

    clearError(repeatPasswordInput);
    return true
}

// live validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
postalInput.addEventListener("input", validatePostalCode);
passwordInput.addEventListener("input", validatePassword);
repeatPasswordInput.addEventListener("input", validateRepeatPassword);
countryInput.addEventListener("change", validatePostalCode);

// On form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePostalCode() &&
        validatePassword() &&
        validateRepeatPassword();

    if (!isValid) {
        alert("Please fix the errors before submitting.");
    } else {
        alert("Form submitted successfully!");
        form.reset();
        document.querySelectorAll(".error-message").forEach(el => el.textContent = '');
    }
});