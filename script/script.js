const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const firstError = document.getElementById('first-error');
const lastError = document.getElementById('last-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, id, message, placeText) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.text');

    errorDisplay.innerText = message;
    id.classList.add('text');
    element.classList.add('error');
    element.placeholder = placeText;
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.text');

    errorDisplay.innerText = '';
    element.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstValue = firstName.value.trim();
    const lastValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstValue === '' || firstValue === null) {
        setError(firstName, firstError, 'First name cannot be empty', '');
    } else {
        setSuccess(firstName)
    }

    if (lastValue === '' || lastValue === null) {
        setError(lastName, lastError, 'Last name cannot be empty', '');
    } else {
        setSuccess(lastName)
    }

    if (emailValue === '' || emailValue === null || (!isValidEmail(emailValue))) {
        setError(email, emailError, 'Looks like this is not an email', 'email@example/com');
    } else {
        setSuccess(email)
    }

    if (passwordValue === '' || passwordValue === null) {
        setError(password, passwordError, 'Password cannot be empty', '');
    } else {
        setSuccess(password)
    }
};