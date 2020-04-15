const testEl = document.getElementById("test");
testEl.style.backgroundColor = 'red';
const ByClassName = document.getElementsByClassName("test");
for (i = 0; i < ByClassName.length; i++) {
    ByClassName[i].style.backgroundColor = 'blue';
};
const ByTagName = document.getElementsByTagName('section')
for (i = 0; i < ByTagName.length; i++) {
    ByTagName[i].style.backgroundColor = "green"
};
const query = document.querySelector('#test-query')
query.style.backgroundColor = 'pink';
const queryAll = document.querySelectorAll('.test-query-all')
for (i = 0; i < queryAll.length; i++) {
    queryAll[i].style.backgroundColor = 'aqua';
};
// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra
const getBody = document.querySelector("body");
getBody.style.fontFamily = "Arial, sans-serif";
const span = document.getElementsByTagName('span');
span[0].textContent = 'Bogdan';
span[1].textContent = 'Cuba Libre';
span[2].textContent = 'Iasi';
const list = document.querySelectorAll('li');
for (i = 0; i < list.length; i++) {
    list[i].classList.add('listitem')
};
const image = document.createElement("IMG");
image.setAttribute("src", "https://www.jamieoliver.com/drinks-tube/wp-content/uploads/2014/06/Cuba_Libre.jpg")
const getImgInBody = document.querySelector('body');
getImgInBody.appendChild(image);
