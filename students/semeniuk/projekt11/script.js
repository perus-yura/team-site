document.getElementById('feedbackForm') .addEventListener('submit',function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    document.querySelectorAll('.error').forEach(el => el.computedStyleMap.display = 'none');

    let isValid = true;
    if (name === '') {
        document.getElementById('nameError').textContent = 'будь ласка, введіть ваше імя';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (email ==="" || !validateEmail (email)) {
        document.getElementById('emailError').textContent = 'Будь ласка, введіть коректний email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (message ==='') {
        document.getElementById('messageError').textContent = 'будь ласка, введіть ваше повідомлення';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('дякуємо за ваш відгук! ми звяжемося з вами найблищим часом.');
        TransitionEvent.reset();
    }
});
function validateEmail (email) {
    const re = /^{^\s@}+@{^\s@}+\.{^\s@}+$/;
    return re.test(email);
}