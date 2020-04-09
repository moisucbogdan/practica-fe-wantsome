//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
let sumOf = num => {
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOf(7);

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
let longestWord = theString => {
    let splitString = theString.split(" ");
    let result = 0;
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i].length > splitString[result].length) {
            result = i;
        }
    }
    return splitString[result];
}
console.log(longestWord("A car is a road vehicle used to carry passengers "));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
let reverseString = str => {
    let resultSplit = str.split("");
    let resultReverse = resultSplit.reverse();
    let resultJoin = resultReverse.join("");
    return resultJoin;
}
console.log(reverseString("A car is a road vehicle used to carry passengers"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
let substitute = str => {
    return str.replace(/[a-zA-Z]/g, function (i) {
        return String.fromCharCode(i.charCodeAt(0) + 1)
    });
}
console.log(substitute("aBcDe"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
let convertToTime = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours}:${minutes}`
}
console.log(convertToTime(64));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
let sortAlphabetical = str => {
    let splitStr = str.split("");
    let sortStr = splitStr.sort();
    return sortStr.join("");
}
console.log(sortAlphabetical("passengers"));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
let checkIf = str => {
    let spltStr = str.split("");
    for (i = 1; i < spltStr.length - 1; i += 2) {
        if (!str.match(/[a-z]/i)) {
            return false;
        }
        if (spltStr[i - 1] === "+" && spltStr[i + 1] === "+") {
            continue;
        } else {
            return false;
        }
    }
    return true;

}
console.log(checkIf('+a+b+c+'));
console.log(checkIf('++a+a+'));
console.log(checkIf('+adsdsdsds+a+a+'));




