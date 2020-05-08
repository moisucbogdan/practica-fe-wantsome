const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
function populateHeader (jsonObj){
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    const myParagraph = document.createElement('p');
    myParagraph.textContent = 'Hometown: ' + jsonObj['homeTown'] + '//Formed: ' + jsonObj['formed'];
    header.appendChild(myParagraph);
}

function showHeroes (jsonObj){
    const heroes = jsonObj['members'];
    for (let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myParagraph1 = document.createElement('p');
        const myParagraph2 = document.createElement('p');
        const myParagraph3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myParagraph1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myParagraph2.textContent = 'Age: ' + heroes[i].age;
        myParagraph3.textContent = 'Superpowers:';

        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myParagraph1);
        myArticle.appendChild(myParagraph2);
        myArticle.appendChild(myParagraph3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }