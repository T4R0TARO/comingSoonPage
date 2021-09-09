console.log('wah');

const notifyButton = document.querySelector('.submitButton');

function emailValidation() {
    const userInput = document.querySelector('.inputEmail').value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const error = document.querySelector('.errorMessage');
    const inputBorder = document.querySelector('.inputEmail');

    if (regx.test(userInput) == true) {
        error.style.display = 'none';
        inputBorder.style.borderColor = 'hsl(223, 100%, 88%)';
        alert('Thank you');
    } else if (regx.test(userInput) !== true) {
        alert('Sorry');
        inputBorder.style.borderColor = 'hsl(354, 100%, 66%)';
        error.style.display = 'block';
    } 
}
notifyButton.addEventListener('click', emailValidation);