//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var array1 = ['car', 'bike', 'scooter', 'scooter', 'boat']
var result = array1.length;
console.log(result)


//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result = array1.concat(array2);
console.log(result)

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var array1 = [20, 30, 40, 50];
var result = Array.isArray(array1);
console.log(result)

var array1 = (50, 30, 40, 50);
var result = Array.isArray(array1);
console.log(result)



//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(" and ");
console.log(result)


//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push('BMW', "Audi");
console.log(cars)

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
var cars = ['Tesla', 'Dacia'];
cars.push('BMW', "Audi");
console.log(cars)
cars.pop();
console.log(cars)
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului\
cars.unshift('Dodge');
console.log(cars)

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();
console.log(cars)
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2elemente noi - splice();
cars.splice(3, 0, 'Viper', 'Mustang');
console.log(cars)
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic

var arrayNumbers = [1, 5, 20, 30, 100];
arrayNumbers.sort(function (a, b) {
  return a - b;
});
console.log(arrayNumbers)

var arrayNumbers = [1, 5, 20, 30, 100];
arrayNumbers.sort(function (a, b) {
  return b - a;
});
console.log(arrayNumbers)

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort();
console.log(fruitsArray)

// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name:"",
var car = {
  name: "Tesla",
  wheels: 4,
}
car.name = 'Mercedes';
console.log(car);
delete car.name;
console.log(car)


//Ex2
// Creati un obiect cu 4 proprietati
var car = {
  name: "Tesla",
  wheels: 'four',
  badge: "xL",
  mirrors: 'two',
}
console.log(car)
// Stocati "key"-urile intr-o variabila noua
var car2 = Object.keys(car);
console.log(car2);
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
var uPname = car2[0].toUpperCase();
var uPwheels = car2[1].toUpperCase();
var uPbadge = car2[2].toUpperCase();
var uPmirrors = car2[3].toUpperCase();
var carUp = uPname + " " + uPwheels + " " + uPbadge + " " + uPmirrors;
console.log(carUp);
// Stocati valorile intr-o variabila noua
var car3 = Object.values(car);
console.log(car3);

// intr-o alta variabila vreau sa am toate valorile cu litere mici

var lOname = car3[0].toLowerCase();
var lOwheels = car3[1].toLowerCase();
var lObadge = car3[2].toLowerCase();
var lOmirrors = car3[3].toLowerCase();
var carlO = lOname + " " + lOwheels + " " + lObadge + " " + lOmirrors;
console.log(carlO)

// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var car = {
  name: "Tesla",
  badge: "xxl",
  doors: function () { console.log(Object.values(car)) } // How? 
}
car.doors();

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1
}

var house = {
  address: "pacurari",
  color: "blue",
  floors: 3,
}
var newhouse = Object.assign({}, house);
console.log(newhouse);

newhouse.carpets = 2;
newhouse.sink = 1;
console.log(newhouse);
var flat = Object.assign({}, myHouse, newhouse);
console.log(flat)
// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var mainObj = {
  obj1: 32,
  obj2: 212,
  secondObj: {
    sobj1: 213,
    sobj2: 34,
  }
}
var newobj = Object.keys(mainObj);
var newsecobj = Object.keys(mainObj.secondObj);
var fin = newobj + newsecobj;
console.log(fin);
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x" NU INTELEG NICI DE LA ALEXANDRA!!!


//Ex6
// Avem obiectul : 
myObject = {
  name: "John",
  surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var new1 = Object.values(myObject);
console.log(new1);
new1.sort();
console.log(new1);

//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.
function carss(mustang, bmw, audi) {
  this.mustang = mustang.toUpperCase();
  this.bmw = bmw.toUpperCase();
  this.audi = audi.toUpperCase();

};
var car = new carss('red', 'blue', 'yellow');
console.log(car);
