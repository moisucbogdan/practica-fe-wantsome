// // acum se printeaza in consola '1' '2' '3' '4' '5' .
// // Vrem sa fie ordinea '3' '5' '2' '1' '4'
// //hint setTimeout

const func1 = () => {
    console.log('1')
};
const func2 = () => {
    console.log('2')
};
const func3 = () => {
    console.log('3')
};
const func4 = () => {
    console.log('4')
};
const func5 = () => {
    console.log('5')
};
func1();
func2();
func3();
func4();
func5();
// // 1

function customMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
};
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let increment = value => {
    return value + 1
};
console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
let double = value => {
    return value * 2
};
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
let square = value => {
    return value * value
};
console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// // 2

// /*
// // This function will go over every element in an array one by one, calling the
// // callback with each item, adding the element to a new array only if
// // the callback returns true, and finally returning the new array.

// var filter = function(____, ____) {
//   var filteredArray = [];
//   for (var ____ = ____; ____ < ____.____; ____++) {
//     var ____ = ____[____];
//     if (____(____)) {
//       filteredArray.push(____);
//     }
//   }
//   return filteredArray;
// };

// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
// */
var filter = function (arr, callback) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (callback(arr[i])) {
            filteredArray.push(value);
        }
    }
    return filteredArray;
};
let odd = val => {
    return val % 2 !== 0;
};
let divisible = val => {
    return val % 3 === 0;
};
let even = val => {
    return val % 2 === 0;
};
let moreThan = (value) => {
    return value > 5;
};
let ifThree = (value) => {
    return value % 3 === 0;
};
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], odd));
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,], divisible));
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], even));
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], moreThan));
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ifThree));
// // 3 
/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/



//Chiar nu stiu ce sa mai fac!!!!!!!!!!!!!!!!!!!!!In varianta asta
//Din punctul meu de vedere am inteles ca atunci cand apelam sa avem"Status is Succes","Status is Error".



// let obje = {
//     status: ['Succes', 'Error']
// };
// const multipleCallbacks1= (obj, func1, func2) => {
//     for (i=0;i<Object.values(obj).length;i++) {
//         if (Object.values(obj)[i] === 'Succes') {
//             return func1();
//         }
//         else if (Object.values(obj)[i] === 'Error') {
//             return func2();
//         }
//     }
// }
// let status1 = () => {
//     return "Status is Succes"
// };
// let status2 = () => {
//     return "Status is Error"
// };
// console.log(multipleCallbacks1(obje, status1, status2));
//Stiu ca acest exercitiu nu e corect dar asa am vrut sa obtin pentru in exepmplul de mai sus
let obje = {
    status: ['Succes', 'Error']
};
const multipleCallbacks2 = (obj, func1, func2) => {
    for (let i = 0; i <= Object.values(obj)[0].length; i++) {
        if (Object.values(obj)[0][i] === 'Succes') {
            console.log(func1());
            // return func1();
        }
        else if (Object.values(obj)[0][i] === 'Error') {
            return func2();
        }
    }
};
let status1 = () => {
    return "Status is Succes"
};
let status2 = () => {
    return "Status is Error"
};
console.log(multipleCallbacks2(obje, status1, status2));

//Cand este facut asa eu cred ca nu respect cum trebuie cerinta!!!!!!!
let object = { status: ["success", "error"] };

let success = () => {
    return "The status is success";
};

let error = () => {
    return "The status is error";
};

const multipleCallbacks = (obj, fu1, fu2) => {
    if (obj.status[0] === "success") {
        return fu1();
    } else {
        return fu2();
    }
};

console.log(multipleCallbacks(object, success, error));
