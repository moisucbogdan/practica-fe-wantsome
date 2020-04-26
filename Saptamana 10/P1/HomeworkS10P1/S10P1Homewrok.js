const form = document.getElementById('form')
const errorUsername = document.getElementById('userNameError');
const username = document.querySelector("#username");
form.addEventListener('input', (e) => {
    let messages = [];
    if (username.value.length < 4) {
        messages.push("Please enter a username")
        document.getElementById("userNameError").style.display = "block";
    };
    if (messages.length > 0) {
        // e.preventDefault() Am adugat button.addEventListener pentru a face eroare sa dispara dinamic. 
        errorUsername.innerHTML = messages.join("")
    } else {
        document.getElementById("userNameError").style.display = "none";
    };
});
const email = document.querySelector('#email');
const errorEmail = document.getElementById('emailError');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('input', (e) => {
    let messages = [];
    if (emailFormat.test(email.value) === false) {
        messages.push("Please enter a Valid Email Address")
        document.getElementById("emailError").style.display = "block";
    };
    if (messages.length > 0) {
      // e.preventDefault() Am adugat button.addEventListener pentru a face eroare sa dispara dinamic.
        errorEmail.innerHTML = messages.join("")
    } else {
        document.getElementById("emailError").style.display = "none";
    };
});
const errorFirstName = document.getElementById('firtNameError');
const firstName = document.querySelector("#firstname");
const lettersFirst = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/
form.addEventListener('input', (e) => {
    let messages = [];
    if (lettersFirst.test(firstname.value) === false) {
        messages.push("Please enter a First Name")
        document.getElementById("firtNameError").style.display = "block";
    };
    if (messages.length > 0) {
        // e.preventDefault() Am adugat button.addEventListener pentru a face eroare sa dispara dinamic.
        errorFirstName.innerHTML = messages.join("")
    } else {
        document.getElementById("firtNameError").style.display = "none";
    };
});
const errorLastName = document.getElementById('lastNameError');
const lastName = document.querySelector("#lastname");
const letters = /^[A-Z][-'a-zA-Z]+$/;
form.addEventListener('input', (e) => {
    let messages = [];
    if (letters.test(lastname.value) === false) {
        messages.push("Please enter a Last Name")
        document.getElementById("lastNameError").style.display = "block";
    };
    if (messages.length > 0) {
        // e.preventDefault() Am adugat button.addEventListener pentru a face eroare sa dispara dinamic.
        errorLastName.innerHTML = messages.join("")
    } else {
        document.getElementById("lastNameError").style.display = "none";
    };
});
const errorPhone = document.getElementById('phoneError');
const phone = document.querySelector("#phone");
form.addEventListener('input', (e) => {
    let messages = [];
    if (phone.value.length < 10) {
        messages.push("Please enter a Phone Number")
        document.getElementById("phoneError").style.display = "block";
    };
    if (messages.length > 0) {
        // e.preventDefault() Am adugat button.addEventListener pentru a face eroare sa dispara dinamic.
        errorPhone.innerHTML = messages.join("")
    } else {
        document.getElementById("phoneError").style.display = "none";
    };
});
const button = document.getElementById('button');
button.addEventListener("click", (e) => {
    if(username.value.length < 4){
        e.preventDefault()
    }else if(emailFormat.test(email.value) === false){
        e.preventDefault()
    }else if(lettersFirst.test(firstname.value) === false){
        e.preventDefault()
    }else if(letters.test(lastname.value) === false){
        e.preventDefault()
    }else if(phone.value.length < 10){
        e.preventDefault()
    }
});
