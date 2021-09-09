# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot
![image](https://user-images.githubusercontent.com/76195521/132763579-9b29f16a-27fa-49fc-a0ae-5ebf46215408.png)

![image](https://user-images.githubusercontent.com/76195521/132763702-9f0972fd-9ae1-4a58-8ac2-029ff85212a9.png)

![image](https://user-images.githubusercontent.com/76195521/132763702-9f0972fd-9ae1-4a58-8ac2-029ff85212a9.png)


### Links
- Solution URL: [Github Repo](https://github.com/T4R0TARO/comingSoonPage)
- Live Site URL: [Git Pages](https://t4r0taro.github.io/comingSoonPage/)

## My process
1. Structure HTML for flexbox positionion
2. Create CSS flexbox layout
3. Input imgs and text 
4. Adjust Padding and Margin
5. Mobile Design First
6. Apply final touches for active state
7. Apply js logic 


### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Custom Variable 
- JS vanilla


### What I learned
Feeling more confident with flexbox. This project felt more fluid when I plannned and prepared the html structure for css positionioning. 
```css
.flexbox-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-evenly; 
    align-items: center;
    text-align: center;

  }
  
  /*Targets all flex items*/
  .flexbox-item {
    margin: 10px; 
    border: 2px solid #333; 
    background-color: #dfdfdf; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
```
email validation that test user input. if test fails display error styles
```js
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
```

### Continued development
js logic still needs to be completed. Next step: When userInput.value = '';{alert('Whoops looks like you forgot to enter an email address')}


## Author

- Website - [Joshua Manansala](https://github.com/T4R0TARO)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)

