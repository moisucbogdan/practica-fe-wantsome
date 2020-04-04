//ex1
function email(mail) {
    var split1 = mail.split('@');
    var split2 = split1[0].split('.');
    var result = split2[0] + '...@' + split1[1];
    console.log(result);
    return result;
}
email('bogdan.iounut@yahoo.com');
//ex2
function upp(string1) {
    var spli = string1.split(' ');
    console.log(spli);
    for (i = 0; i < spli.length; i++) {
        spli[i] = spli[i].charAt(0).toUpperCase() + spli[i].slice(1);
    }
    console.log(spli.join(' '));
}
upp('i am superman');
//ex3
function change(string2) {
    var spli = string2.split('');
    console.log(spli);
    for (i = 0; i < spli.length; i++) {
        if (spli[i] === spli[i].toUpperCase()) {
            spli[i] = spli[i].toLowerCase();
        } else {
            spli[i] = spli[i].toUpperCase();
        }
    }
    console.log(spli.join(''));
}
change("xxXyYzZZ");
//ex4
function conc(str, num) {
    var word = "";
    for (i = 0; i < num; i++) {
        word += str;
    }
    console.log(word);
}
conc("Wantsome", 2);
//ex5
function pali(word) {
    var check = word.split("");
    if (check.reverse().join('') === word) {
        return word + " este palidrom";
    } return word + " nu este palidrom";
}
console.log(pali("ana"));
//ex6
function large(arr) {
    var largeNumb = [0, 0, 0, 0];
    for (i = 0; i < arr.length; i++) {
        for (ind = 0; ind < arr[i].length; ind++) {
            if (arr[i][ind] > largeNumb[i]) {
                largeNumb[i] = arr[i][ind];
            }
        }
    }
    return largeNumb;
}
console.log(large([[3, 6, 2, 14], [17, 28, 98, 3], [6, 82, 190, 64], [4, 7, 24, 28]]));
//ex7
function spl(str) {
    var result = str.split("");
    var result2 = result.reverse();
    var result3 = result2.join("");
    return result3;
}
console.log(spl("Bogdan"));
//ex8
function fact(a) {
    a = 1;
    for (i = 1; i < 6; i++) {
        a *= i;
    }
    console.log(a);
}
fact(6);
//ex9
function check(str1, str2) {
    var result = str1.endsWith(str2);
    return result;
}
console.log(check("Ce sa faci", "ci"));
//ex10
function forTrue(array, thisFunc) {
    for (i = 0; i < array.length; i++) {
        thisFunc(array[i]);
    }
}
var theArray = [1, 2, 3, 4, 5, 6];
function testf(num) {
    if (num === 3) {
        console.log(num);
    }
}
forTrue(theArray, testf);
//ex11
// function checkIfString(str1, str2) {
//     for (i = 0; i < str1.length; i++) {
//         if (str2.indexOf(str1[i]) <= -1) return false;
//     }
//     for (i = 0; i < str2.length; i++) {
//         if (str1.indexOf(str2[i]) <= -1) return false;
//     }
//     return true;
// }   
// console.log(checkIfString("aabbcc","ccbbaa"))
// Not this
//This ex11
function checkIfString1(str1, str2) {
    i = 0;
    j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1.charAt(i) == str2.charAt(j)) {
            i++;
        }
        if (str1.length == i) {
            return true;
        }
        j++;
    }
    return false;
}
console.log(checkIfString1("car", "mycar"));
console.log(checkIfString1("car", "bar"));
//ex12
function meet(arr, num) {
    for (element of arr) {
        if (element === num) {
            break;
        }
        console.log(element);
    }
}
meet([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
//ex13
var myArray = [false, null, 0, "", undefined, NaN];
function checkArray(thisArray) {
    var newArray = [];
    for (i = 0; i < thisArray.length; i++) {
        newArray.push(Boolean(thisArray[i]));
    }
    console.log(newArray);
}
checkArray(myArray);
//ex14
function repeat(str, num) {
    var array = [];
    for (i = 0; i < num;) {
        array[i++] = str;
    }
    return array.join("");
}
console.log(repeat("BMW", 7));