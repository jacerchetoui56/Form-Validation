const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');


//!===> the 'input' eventListener allows us to see the input of a field right away 
//! it means like a live version of the field

username.addEventListener('input', () => {
    let pattern = /^[A-Za-z][A-Za-z0-9]+$/gi
    //!=> this means that the username starts with a letter and then contains only letters and numbers
    if (pattern.test(username.value)) {
        username.classList.remove('invalid');
        username.classList.add('valid');
    }
    else {
        username.classList.remove('valid');
        username.classList.add('invalid');
    }
})
email.addEventListener('input', () => {
    let pattern = /^[A-Za-z][A-Za-z0-9]*@[A-Za-z]+\.[A-Za-z]+$/gi
    //!=> this means that the email starts with a letter and has '@' and then some letters and then '.' and lastly some last letters
    if (pattern.test(email.value)) {
        email.classList.remove('invalid');
        email.classList.add('valid');
    }
    else {
        email.classList.remove('valid');
        email.classList.add('invalid');
    }
})

password.addEventListener('input', () => {
    let pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[<>{}\"/|;:.,~!?@#$%^=&*_+])(?=.{12,})/g
    //!=> the following pattern means that :
    //* - the password contains at least one lowercase letter
    //* - the password contains at least one uppercase letter
    //* - the password contains at least one digit
    //* - the password contains at least one special characters: <>{}\"/|;:.,~!?@#$%^=&*_+
    //* - the password contains at least 12 characters

    if (pattern.test(password.value)) {
        console.log(password.value + "=> valid")
        password.classList.remove('invalid');
        password.classList.add('valid');
    }
    else {
        console.log(password.value + "=> invalid")
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
})


phone.addEventListener('input', () => {
    let pattern = /\d{8}/g
    //!=> this means that the phone number should contain 8 digits exactly
    if (pattern.test(phone.value)) {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
    }
    else {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
    }
})