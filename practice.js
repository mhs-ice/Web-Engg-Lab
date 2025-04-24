let person = "Mhs"
console.log("Hello " + person)

const car={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red",
    start() {
        console.log("Car started")
    },
    stop() {
        console.log("Car stopped")
    }
}

console.log(car.brand)
car.start()

function Person2 (name, age) {
    this.name = name
    this.age = age
    this.greet = function() {
        console.log("Hello " + this.name)
    }
}

const me =new Person2("Mhs", 25)
console.log(me.name)
console.log("I am " + me.age + " years old")