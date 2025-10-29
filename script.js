// Complete the js code
function Car(make, model) {
	this.make= make,
    this.model = model
}

function SportsCar(make, model, topSpeed) {
	super(make,model)
	this.topSpeed = topSpeed
}

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;



