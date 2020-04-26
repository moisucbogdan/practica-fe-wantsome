// /* 
// 1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
// definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
// de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
// intermediul onclick atasat elementului buton un event listener care sa declanseze
// functia buttonEventHandler atunci cand se apasa pe buton.
// */
const buttonEventHandler = () => {
    alert("Ai apasat pe buton.")
}

// /*
// 2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
// care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
// un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
// */
const textInputEventHandler = () => {
    alert("Textul din input a fost schimbat")
}
// /*
// 3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
// Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
// atunci cand user-ul apasa orice tasta.
// Hint: folositi addEventListener
// // */

let color = ['red', 'blue', "green", "grey", "orange"]
let cameleonEventHandler = () => {
    document.getElementById("para").style.color = color[Math.floor(Math.random() * 5)];
}
document.addEventListener("keydown", cameleonEventHandler);

//************************************************************************** */
//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

const button = document.querySelector("#exButton")
const postTheGossip = () => {
    const nume = document.querySelector("#name").value;
    const adjectiv = document.querySelector("#adjective").value;
    const cuvantRandom = document.querySelector("#random-word").value;
    const paragraph = document.createElement("p");
    paragraph.textContent =  `${nume}  este  ${adjectiv}  dupa ${cuvantRandom}`;
    document.querySelector('body').appendChild(paragraph);
    
}
button.addEventListener("click", postTheGossip);



// ********************************************************************************
//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle
const sqrBtn = document.getElementById('sqr-btn');
const  sqrNum = () =>{
    const number = document.getElementById('square').value;
    alert(number * number)
}
const halfBtn = document.getElementById('half-btn');
const halfNum = () =>{
    const number = document.getElementById('half').value;
    alert(number / 2)
}
const prcBtn = document.getElementById('prc-btn');
const percentNum = () =>{
    const number1 = document.getElementById('percent1').value;
    const number2 = document.getElementById('percent2').value;
    alert((number1*100)/number2 + '%')
}
//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei
sqrBtn.addEventListener('click', sqrNum)
halfBtn.addEventListener('click', halfNum)
prcBtn.addEventListener('click', percentNum)
//3
// Bonus: faceti sa functioneze si la key press pe langa click


