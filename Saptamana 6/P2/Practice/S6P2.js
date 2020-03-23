function greatestNrBetween (number1, number2) {
    if (number1 > number2){
        console.log( 'Numaraul mai mare dintre ' + number1 + ' si ' + number2 + ' este ' + number1);
    } else {
        console.log( 'Numaraul mai mare dintre ' + number1 + ' si ' + number2 + ' este ' + number2);
    }
}
greatestNrBetween (5,10);

var helloWorldInLang = function (language) {
    if (language === 'en'){
        console.log('Hello world');
    } else if (language === 'es') {
        console.log('Espania');
    } else if (language === 'de') {
        console.log("Panzer");
    } else  {
        console.log('Hello');
    }
    
} 
helloWorldInLang('de');

function  pluralizeWord (sub, numb){
    if (sub === 'sheep'){
        return numb + sub;
    } else if (sub === "goose" && numb > 1){
        return numb + 'geese'
    }else if (numb === 1) {
        return numb + sub; 
    } else if (numb > 1){
        return numb + sub + "s";
    } 
}
console.log(pluralizeWord('cat',1));
console.log(pluralizeWord('dog',2));
console.log(pluralizeWord('sheep',10));
console.log(pluralizeWord('goose',1));

function tax (money) {
    if (money <= 30000){
    var taxes = 0
    return "Pentru un venit anual de " + money + " aveti de platit taxe in valoare de " + taxes;
    } else if (money >= 30001 && money <= 99999 ){
        var taxes = money * 0.35
        return "Pentru un venit anual de " + money + " aveti de platit taxe in valoare de " + taxes;
    } else if (money >= 100000){
        var taxes = money * 0.40
        return "Pentru un venit anual de " + money + " aveti de platit taxe in valoare de " + taxes;
    }

}
console.log(tax(100000))

function grade (points) {
    if (points > 90 ){
        return "For points " + points + " you obtain grade AA"
    } else if ( points <= 90 && points >80){
        return "For points " + points + " you obtain grade AB"
    } else if ( points <=80 && points >70  ){
        return "For points " + points + " you obtain grade BB"
    }  else if ( points <=70 && points >60  ){
        return "For points " + points + " you obtain grade BC"
    }   else if ( points <=60 && points >50  ){
        return "For points " + points + " you obtain grade CC"
    }   else if ( points <=50 && points >40  ){
        return "For points " + points + " you obtain grade CD"
    }   else if ( points <=40 && points >30  ){
        return "For points " + points + " you obtain grade DD"
    }   else if ( points <=30){
        return "For points " + points + " you obtain grade FF"
    }   

}
console.log(grade(0))

function is_weekend (dat){
    var dte = new Date(dat);
    if (dte.getDay() === 0 || dte.getDay() === 6){
        return "weekend"
    }
    
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));