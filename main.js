const sign_up_btn = document.getElementById("sign-up-btn");
const sign_in_btn = document.getElementById("sign-in-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})

document.querySelector('form.sign-in').addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
    checkSuccess(e.target);
})

document.querySelector('form.sign-up').addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
    checkSuccess(e.target);
})

function checkSuccess(input){
    const signInUser = document.querySelector('.sign-in #username').parentElement;
    const signInPass = document.querySelector('.sign-in #password').parentElement;
    const signUpUser = document.querySelector('.sign-up #username').parentElement;
    const signUpEmail = document.querySelector('.sign-up #email').parentElement;
    const signUpPassword = document.querySelector('.sign-up #password').parentElement;
    const signUpPassword2 = document.querySelector('.sign-up #password2').parentElement;

    input.firstElementChild.classList.remove('show');
    if(signInUser.classList.contains('success') && signInPass.classList.contains('success')){
        input.firstElementChild.classList.add('show');
    }
    else if(signUpUser.classList.contains('success') && signUpEmail.classList.contains('success') && signUpPassword.classList.contains('success') && signUpPassword2.classList.contains('success')){
        input.firstElementChild.classList.add('show');
    }
}

function checkInputs(){
    const signInUser = document.querySelector('.sign-in #username');
    const signInPass = document.querySelector('.sign-in #password');
    const signUpUser = document.querySelector('.sign-up #username');
    const signUpEmail = document.querySelector('.sign-up #email');
    const signUpPassword = document.querySelector('.sign-up #password');
    const signUpPassword2 = document.querySelector('.sign-up #password2');

    if(signInUser.value.trim() === ''){
        showErrorFor(signInUser, "Username cannnot be blank");
    }else{
        showSucessFor(signInUser);
    }

    if(signInPass.value.trim() === ''){
        showErrorFor(signInPass, "Password cannot be blank");
    }else if(signInPass.value.trim().length < 8){
        showErrorFor(signInPass, "Password must be atleast 8 characters long")
    }else{
        showSucessFor(signInPass);
    }

    if(signUpUser.value.trim() === ''){
        showErrorFor(signUpUser, "Username cannnot be blank");
    }else{
        showSucessFor(signUpUser);
    }

    if(signUpPassword.value.trim() === ''){
        showErrorFor(signUpPassword, "Password cannot be blank");
    }else if(signUpPassword.value.trim().length < 8){
        showErrorFor(signUpPassword, "Password must be atleast 8 characters long")
    }else{
        showSucessFor(signUpPassword);
    }

    if(signUpEmail.value.trim() === ''){
        showErrorFor(signUpEmail, "Email field is required");
    }else if(!validateEmail(signUpEmail.value.trim())){
        showErrorFor(signUpEmail, "Invalid Email");
    }else{
        showSucessFor(signUpEmail);
    }

    if(signUpPassword2.value.trim() !== signUpPassword.value.trim()){
        showErrorFor(signUpPassword2, "Password doesn't match")
    }else{
        showSucessFor(signUpPassword2);
    }

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function showErrorFor(input, msg){
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    input.nextElementSibling.textContent = msg;
}

function showSucessFor(input){
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    input.nextElementSibling.textContent = '';
}