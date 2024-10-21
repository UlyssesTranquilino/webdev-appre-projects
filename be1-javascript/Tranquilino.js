class Entity {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  birthDate() {
    console.log(`${this.name} was created on ${this.date}`);
  }
}

class Robot extends Entity {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.legs = 2;
  }

  walk() {
    console.log(`${this.name} is walking with ${this.legs} legs--brrrrt`);
  }
}

class Cat extends Entity {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.legs = 4;
  }

  walk() {
    console.log(`${this.name} is walking with ${this.legs} legs--meow`);
  }

  growl() {
    return "Purrrr~^^";
  }
}

const robot1 = new Robot("WALL-E", "September 10 2100");
const cat1 = new Cat("Meowth", "October 21 1996");

robot1.walk();
cat1.walk();
robot1.birthDate();
cat1.birthDate();
console.log(cat1.name, ": ", cat1.growl());
