/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */
const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];
const activeUsers = myData.filter(user => user.active === true);
console.log(activeUsers);

// /*Ex 2
// Convertiti toate distantele in mile - 0.621371 * distance - folosind map
// Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
// Returnati distanta totala - folosind reduce
// */
const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]
const distanceToMile = distances.map(km => `${km.distance * 0.621371} miles`);
console.log(distanceToMile);
const distanceLessThen10000 = distances.filter(km => km.distance < 10000);
console.log(distanceLessThen10000);
const totalDistance = distances.reduce((acc, km) => acc + km.distance, 0);
console.log(totalDistance);

// // Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];
const titleAndId = releases.map(emelements => (
    {
        id: emelements.id,
        title: emelements.title
    }
));
console.log(titleAndId);

// // Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];
const ratingIsFive = newReleases
    .filter(emelements => emelements.rating === 5.0)
    .map(emelements => emelements.id);
console.log(ratingIsFive);

// // Vreau la final sa am o lista de video ids
const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
const videoIds = movieLists
    .map(elements => elements.videos)
    .flat()
    .map(elements => elements.id)
console.log(videoIds);

// //Returnati id, title, si 150x200 box art url pentru fiecare video
// //hint aveti de folosit map,filter
let movieListss = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
const titleIDBoxarts = movieListss
    .map(elements => elements.videos)
    .flat();
const titleIDBoxartsList = titleIDBoxarts.map(item => {
    const box150 = item.boxarts.find(boxart => boxart.width === 150);
    return {
        id: item.id,
        title: item.title,
        boxarts: box150,
        url: item.url
    }
});
console.log(titleIDBoxartsList);

// //ex.1.
// // Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// // de exemplu moveLetters('hello') // => 'ifmmp'
// // moveLetters('abcxy') // => "bcdyz"
// //hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function (string) {
    const moveLetter = string.split("")
        .map(letter => String.fromCharCode(letter.charCodeAt(0) + 1))
        .join("");
    return moveLetter;
}
console.log(moveLetters("acegi"));

//   // ex2
//   // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
//   // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
    const changeWord = string
        .split(" ")
        .map((firstWord, i) => {
            if (i % 2 == 0) {
                return firstWord.toUpperCase()
            }
            return firstWord.toLowerCase()
        })
        .join(" ");
    return changeWord;
}
console.log(changeWordCase('hey ppl, lets learn javascript together sometime'));

//   // ex3
// // Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(element => element.species === "cat");
console.log(allCats);

let allHumans = arr.filter(element => element.species === "human");
console.log(allHumans);

let allFemales = arr.filter(element => element.sex === "f");
console.log(allFemales);

let totalOfAllAges = arr.reduce((acc, element) => acc + element.age, 0);
console.log(totalOfAllAges);

let averageAgeOfCats = arr
    .filter(element => element.species === "cat")
    .reduce((acc, element) => acc + element.age, 0) / allCats.length;
console.log(averageAgeOfCats);

let averageAgeOfHumans = arr
    .filter(element => element.species === "human")
    .reduce((acc, element) => acc + element.age, 0) / allHumans.length;
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr
    .reduce((acc, elem) => acc + elem.name.length, 0) / arr.length;
console.log(avgLengthOfNames);

// //ex 1.
// // Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
// //ex composedValue(square, double, 5);  // 100
// // functia square returneaza patratul numarului iar double - dublul numarului
const square = numb => numb * numb;
const double = numb => numb * 2;
const composedValue = (fn1, fn2, value) => fn1(fn2(value));
console.log(composedValue(square, double, 5));

// //ex.2
// //faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
// //exemplu const myFunction = compose(square, double) 
// // myFunction(5)  --> 100
// // myFunction(10) --> 400  ...etc
const compose = numb => square(double(numb));
console.log(compose(10));

// //ex.3
// //faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// // find([1,2,3,4,5], isOdd); returneaza 1 3 5
const isOdd = numb => numb.filter(numb => numb % 2 === 1);
const find = (array, fn) => fn(array);
console.log(find([1,2,3,4,5], isOdd));
