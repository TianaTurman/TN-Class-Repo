function Laptop(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Laptop.prototype.getInfo = function() {
    return `This is a ${this.year} ${this.brand} ${this.model}.`;
};

// Practice creating and using the Laptop object
let laptop1 = new Laptop("Apple", "MacBook Pro", 2021);
let laptop2 = new Laptop("Dell", "XPS 13", 2019);

console.log(laptop1.getInfo()); // This is a 2021 Apple MacBook Pro.
console.log(laptop2.getInfo()); // This is a 2019 Dell XPS 13.