// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  // Use Car.call instead of super()
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);

// Fix constructor pointer
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
