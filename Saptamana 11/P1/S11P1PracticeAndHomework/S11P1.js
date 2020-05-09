// //1*************************************************************************
function capitalizeNames(arr) {
    const capitalizeNames = arr.map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`);
    return capitalizeNames
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// //2**************************************************************************
function doubleEachNumber(arr) {
    const doubleEachNumber = arr.map(item => {
        if (typeof item !== "number") {
            return item
        }
        return item * 2
    });
    return doubleEachNumber;
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala'])); // [4, “5”, 200, “100”, “blalblala”]

// //3***************************************************************************
function getPersonsNames(arr) {
    const justNames = arr.map(item => `${item.name} ${item.surname}`);
    return justNames
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]));

// //4***************************************************************************
function computeExamPass(arr) {
    arr.map(item => {
        if (item.grade >= 5) {
            return `${item.name} ${item.surname} has passed the exam`
        } else {
            return `${item.name} ${item.surname} has faild the exam`
        }
    });

}
console.log(computeExamPass([
    {
        name: "Angelina",
        surname: 'Jolie',
        grade: 7
    },
    {
        name: "Eric",
        surname: 'Jones',
        grade: 3
    },
]));

// //5***************************************************************************
function getPersonsDomElements(arr) {
    arr.forEach(person => {
        let name = document.createElement('h1')
        name.textContent = `${person.name} ${person.surname}`
        document.querySelector('body').appendChild(name)

        let age = document.createElement('h2')
        age.textContent = `${person.age}`
        document.querySelector('body').appendChild(age)
    })
};

//OR THIS************************
// function getPersonsDomElements(arr) {
//     const inDom = arr.map(person => `<h1>${person.name} ${person.surname}</h1><h2>${person.age}</h2>`);
//     const body = document.getElementsByTagName('body')[0];
//     return body.innerHTML= inDom;
// };

console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]));





