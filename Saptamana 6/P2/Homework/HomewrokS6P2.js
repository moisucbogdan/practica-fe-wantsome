//  function personalId (CNP) {
//     if (CNP < 1999999999999 && CNP >1000000000000){
//         return "Persoana verificata este de sex M"
//     } else if (CNP > 2000000000000 && CNP < 2999999999999){
//         return "Persoana verificata este de sex F"
//     }
// }
// console.log(personalId(1920128226725))

/*
Input the CNP number.
If the first number of the CNP is 1 print "Persoana verificata este de sex M"
If the first number of the CNP is 2 print "Persoana verificata este de sex F"
If the first number of the CNP is different the the cases above will print "Persoana verificata este de sex M"
*/
function personalId(CNP) {
    var iDstring = CNP.toString();
    if (iDstring[0] === '1') {
        return 'Persoana verificata este de sex M'
    } else if (iDstring[0] === '2') {
        return 'Persoana verificata este de sex F'
    } else if (iDstring[0] >= '3') {
        return 'Persoana verificata este de sex Necunoscut'
    }
}
console.log(personalId(2));
/*
Input the points bewtween 1-3.
It will print 'Calificativul corespunzator punctajului [point] este [E]
Input the point bewtween 3-6.
It will print 'Calificativul corespunzator punctajului [point] este [D]
Input the point bewtween 7-8.
It will print 'Calificativul corespunzator punctajului [point] este [B]
Input the point 9.
It will print 'Calificativul corespunzator punctajului [point] este [A]
Input the point 10.
It will print 'Calificativul corespunzator punctajului [point] este [A+]
*/
var test = function (point) {
    if (point >= 1 && point <= 3) {
        var grade = 'E';
        return 'Calificatul corespunzator punctajului ' + point + ' este ' + grade + " .";
    } else if (point >= 4 && point <= 6) {
        var grade = 'D';
        return 'Calificatul corespunzator punctajului ' + point + ' este ' + grade + " .";
    } else if (point >= 7 && point <= 8) {
        var grade = 'B';
        return 'Calificatul corespunzator punctajului ' + point + ' este ' + grade + " .";
    } else if (point <= 9) {
        var grade = 'A';
        return 'Calificatul corespunzator punctajului ' + point + ' este ' + grade + " .";
    } else if (point >= 10) {
        var grade = 'A+';
        return 'Calificatul corespunzator punctajului ' + point + ' este ' + grade + " .";
    }
}
console.log(test(10));
/*
Input the car brand .
If is 'Dacia' initialize country 'Romania'
Print 'Marca Dacia se produce in Romania'
If is 'Audi' initialize country 'Germania'
Print 'Marca Audi se produce in Germania' 
If is 'Mitsubishi' initialize country 'Japonia'
Print 'Marca Mitsubishi se produce in Japonia' 
If is 'Rover' initialize country 'UK'
Print 'Marca Rover se produce in UK' 
If is 'Ford' initialize country 'America'
Print 'Marca Ford se produce in America' 
If is 'Peugeot' initialize country 'Franta'
Print 'Marca Peugeot se produce in Franta'  
*/
function auto(brand) {
    if (brand === 'Dacia') {
        var country = 'Romania';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    } else if (brand === 'Audi') {
        var country = 'Germania';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    } else if (brand === 'Mitsubishi') {
        var country = 'Japonia';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    } else if (brand === 'Rover') {
        var country = 'UK';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    } else if (brand === 'Ford') {
        var country = 'America';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    } else if (brand === 'Peugeot') {
        var country = 'Franta';
        return 'Marca ' + brand + ' se produce in ' + country + '.';
    }
}
console.log(auto('Peugeot'));

var auto = function (brand) {
    switch (brand) {
        case 'Dacia':
            var country = 'Romania';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    } switch (brand) {
        case 'Audi':
            var country = 'Germania';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    } switch (brand) {
        case 'Mitsubishi':
            var country = 'Japonia';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    } switch (brand) {
        case 'Rover':
            var country = 'UK';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    } switch (brand) {
        case 'Ford':
            var country = 'America';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    } switch (brand) {
        case 'Peugeot':
            var country = 'Franta';
            return 'Marca ' + brand + ' se produce in ' + country + '.';
    }

}
console.log(auto('Ford'));

function auto2(brand) {
    var country = {
        'Dacia': 'Romania',
        'Audi': 'Germania',
        'Mitsubishi': 'Japonia',
        'Rover': 'UK',
        'Ford': 'America',
        'Peugeot': 'Franta',
    };
    if (country[brand]) {
        return 'Marca ' + brand + ' se produce in ' + country[brand] + '.';
    } else {
        return 'Marca ' + brand + ' este necunoscuta.'
    }
}
console.log(auto2('Tesla'));
/*
Input an Array that it will sort in ascending oder based on salary value.
*/

(function () {
    var cars = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
    ];
   var sorting = cars.sort(function(a, b){
       return a.salary - b.salary;
   });
   console.log(cars);
})();
