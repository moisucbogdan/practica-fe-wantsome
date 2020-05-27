//EX1------------------------------------
// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function (mph) {
      this.speed = mph;
      return this.driver + " driving at " + mph + " miles per hour";
    };
  };
  
  var Car = new vehicle("Jon");
  var Truck = new vehicle("Dave");
  
  Truck.cargo = [];
  Truck.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
  };
  Truck.unloadCargo = function () {
    return this.cargo.pop();
  };
  
  console.log(Car);
  console.log(Truck);
//EX2------------------------------------
  var person = function () {};
  
  person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
  };
  //Creati un obiect numit Trainer care sa fie derivat din obiectul
  //Person si implementati o metoda teach() ce primeste un string
  //numit subject si printeaza
  // [nume trainer] is now teaching [subject]
  
  let trainer = function (subject) {
    this.subject = subject;
    this.teach = function () {
      console.log(`${this.name} is teaching ${this.subject}`);
    };
  };
  
  trainer.prototype = new person();
  let lucian = new trainer("JS");
  
  lucian.initialize("Lucian");
  lucian.teach();
  
  //EX3------------------------------------
  // triunghi.constructor;                 // Triangle(a, b, c)
  // forma.isPrototypeOf(triunghi);        // true
  // triunghi.getPerimeter();              // 48
  // triunghi.getType();                   // "triunghi"
  
  //cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)
  
  function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "triunghi";
  };
  
  const forma = {
    getType: function () {
      return this.type;
    },
  };
  
  Triangle.prototype = forma;
  Triangle.prototype.constructor = Triangle;
  let triunghi = new Triangle(16, 14, 18);
  triunghi.getPerimeter = function () {
    return this.a + this.b + this.c;
  };
  
  console.log(triunghi.constructor);
  console.log(forma.isPrototypeOf(triunghi));
  console.log(triunghi.getPerimeter());
  console.log(triunghi.getType());