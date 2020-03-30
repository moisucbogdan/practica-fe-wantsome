//Declar o functie evenornot care va itera de la 0-20.
//Daca interarea contine numar par va afisa index + " este numar par"
//Daca nu va afisa index + " este numar impar"

function evenornot() {
    for (i = 0; i <= 20; i++) {
      if (i === 0 || i % 2 === 0) {
        console.log(i + "  este numapr par")
      } else {
        console.log(i + " este numar impar")
      }
  
    }
  }
  evenornot()
  
  function evenornot2() {
    i = 0;
    while (i <= 20) {
      if (i === 0 || i % 2 === 0) {
        console.log(i + "  este numapr par")
      } else {
        console.log(i + " este numar impar")
      }
      i++;
    }
  }
  evenornot2()
  
  //Declar o functie multiply care va itera de la 0-10
  //Pentru ficare iteratie multiplica cu 9
  //Afiseaza resultatul pentru fiecare.
  
  function multiply() {
    for (i = 0; i <= 10; i++) {
      var mul = i * 9;
      console.log(mul);
    }
  }
  multiply()
  
  function multiply2() {
    i = 0;
    while (i <= 10) {
      var mul = i * 9;
      console.log(mul);
      i++;
    }
  }
  multiply2()
  
  //Declar o functie mathematics care va itera de la 0-10
  //Pentru ficare iteratie multiplica cu 1
  //Afiseaza resultatul pentru fiecare inetratia aratand toata operatia.
  function mathematics() {
    for (i = 0; i <= 10; i++) {
      var mul = i * 1;
      var res = "1*" + i + "=" + mul
      console.log(res)
    }
  }
  mathematics()
  
  //Declar o functie test care va itera de la 0-10
  //Pentru iteratia cuprinsa intre 1-3 afiseaza Calificativul E
  //Pentru iteratia cuprinsa intre 4-6 afiseaza Calificativul D
  //Pentru iteratia cuprinsa intre 7-8 afiseaza Calificativul B
  //Pentru iteratia  9 afiseaza Calificativul A
  //Pentru iteratia 10 afiseaza Calificativul A+
  
  function test() {
    for (i = 0; i <= 10; i++) {
      if (i >= 1 && i <= 3) {
        var grade = 'E';
        console.log('Calificatul corespunzator punctajului ' + i + ' este ' + grade + " .");
      } else if (i >= 4 && i <= 6) {
        var grade = 'D';
        console.log('Calificatul corespunzator punctajului ' + i + ' este ' + grade + " .");
      } else if (i >= 7 && i <= 8) {
        var grade = 'B';
        console.log('Calificatul corespunzator punctajului ' + i + ' este ' + grade + " .");
      } else if (i <= 9) {
        var grade = 'A';
        console.log('Calificatul corespunzator punctajului ' + i + ' este ' + grade + " .");
      } else if (i >= 10) {
        var grade = 'A+';
        console.log('Calificatul corespunzator punctajului ' + i + ' este ' + grade + " .");
      }
    }
  }
  test();