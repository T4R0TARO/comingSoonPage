console.log('wah');

const notifyButton = document.querySelector('.submitButton');

function emailValidation() {
    const userInput = document.querySelector('.inputEmail').value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const error = document.querySelector('.errorMessage');
    const inputborder = document.querySelector('.inputEmail');

    if (regx.test(userInput) == true) {
        error.className = "errorMessage";
        inputborder.className = "inputEmail";
        notifyButton.style.backgroundColor = '#3dd28d';
        alert('Thank you');
        
    } else if (regx.test(userInput) !== true) {
        error.className = "errorMessageShow";
        inputborder.className = "inputEmailError";
        notifyButton.style.backgroundColor = 'hsl(223, 87%, 63%)';
    } else {
       
    }
}

notifyButton.addEventListener('click', emailValidation);