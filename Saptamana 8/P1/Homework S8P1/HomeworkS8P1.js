//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100 
let myFunction = (a, b) => {
    if (a == b) {
        return a * b;
    } else if (a !== b) {
        return a + b;
    }
}
console.log(myFunction(10, 5));
console.log(myFunction(10, 10));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
let testFunction = (a, b) => {
    let sum = a + b;
    if (a == b) {
        return true;
    } else if (sum = 30) {
        return false;
    } else {
        return false;
    }
}
console.log(testFunction(10, 15));
console.log(testFunction(30, 30));
console.log(testFunction(15, 15));
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
let checkString = (str) => {
    if (str.includes("JS")) {
        return str;
    } else {
        return "JS" + str;
    }
}
console.log(checkString("JSisAwsome"));
console.log(checkString("isEasy"));
console.log(checkString(""));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
let removeDuplicates = (str) => {
    let unique = "";
    for (i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) == -1) {
            unique += str[i];
        }
    }
    return unique;
}
console.log(removeDuplicates('aabcdeef'));
console.log(removeDuplicates("122334"));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
let findLongestString = (str) => {
    let strSplit = str.split(' ');
    let res = 0;
    for (i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[res].length) {
            res = i;
        }
    }
    return strSplit[res];
}
console.log(findLongestString('Wantsome is Awsomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 
let star = rows => {
    for (i = 1; i <= rows; i++) {
        let str = "";
        for (j = 1; j <= i; j++) {
            str += " * ";
        }
        console.log(str);
    }
}
star(5);
//Prima data am facut mai ciobanesc
// let star = () => {
//     let star = "*";
//     console.log(star);
//     let stars = () => {
//         let star = "* *";
//         console.log(star);
//         let stars = () => {
//             let star = "* * *";
//             console.log(star);
//             let stars = () => {
//                 let star = "* * * *";
//                 console.log(star);
//                 let stars = () => {
//                     let star = "* * * * *";
//                     console.log(star);
//                 }
//                 stars();
//             }
//             stars();
//         }
//         stars();
//     }
//     stars();
// }
// star();

//ex7
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
let calculate = (num1, num2, op) => {
    if (op === "add") {
        let res = num1 + num2;
        return res;
    } else if (op === "substract") {
        let res2 = num1 - num2;
        return res2;
    }
}
console.log(calculate(2, 5, 'add'));
console.log(calculate(10, 8, 'substract'));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
let isDiv = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "BOTH";
    } else if (num % 3 === 0) {
        return "THREE";
    } else if (num % 5 === 0) {
        return "FIVE";
    } else {
        return num;
    }
}
console.log(isDiv(15));
console.log(isDiv(25));
console.log(isDiv(9));
console.log(isDiv(7));

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
let date = () => {
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
    let datehour = () => {
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let prepand = (hour >= 12) ? " PM " : " AM ";
        hour = (hour >= 12) ? hour - 12 : hour;
        if (hour === 0 && prepand === ' PM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Noon';
            }
            else {
                hour = 12;
                prepand = ' PM';
            }
        }
        if (hour === 0 && prepand === ' AM ') {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = ' Midnight';
            }
            else {
                hour = 12;
                prepand = ' AM';
            }
        }
        return ("Ora este : " + hour + prepand + " : " + minute + " : " + second);
    }
    console.log(datehour());
    return ("Astazi este : " + daylist[day] + ".");
}
console.log(date());

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
let validPin = num => {
    return /^([0-9]{4}|[0-9]{6})$/.test(num);
}
console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));
//ex11
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
let removeVowels = (str) => {
    cons = str.match(/[^aeiou]/gi);
    return cons.join("");
}
console.log(removeVowels("Hey I am developer"));

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
let square = (num) => {
    if (num > 0 && Math.sqrt(num) % 1 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(square(-1));
console.log(square(25));
console.log(square(3));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
let isAnagram = (str1, str2) => {
    if (str1.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('') ===
        str2.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')) {
        return true;
    } return false;
}
console.log(isAnagram("School master", "The class room"));
console.log(isAnagram("Schoal master", "The class room"));