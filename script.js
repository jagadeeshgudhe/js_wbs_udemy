
// 4. Scope and The Scope Chain
function outerFunction() {
    const outerVar = "I'm from outer function!";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
}

outerFunction();

// 5. Scoping in Practice
let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

checkScope();

// 6. Variable Environment: Hoisting and The TDZ
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// 7. Hoisting and TDZ in Practice
function hoistingExample() {
    console.log(a); // undefined
    var a = 10;
}

hoistingExample();

// 8. The this Keyword
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // "Hello, Alice"

// 9. The this Keyword in Practice
const car = {
    brand: "Toyota",
    getBrand: function() {
        return this.brand;
    }
};

const getBrand = car.getBrand;
console.log(getBrand()); // undefined

// 10. Regular Functions vs. Arrow Functions
const obj = {
    value: 100,
    regularFunction: function() {
        console.log(this.value); // 100
    },
    arrowFunction: () => {
        console.log(this.value); // undefined
    }
};

obj.regularFunction();
obj.arrowFunction();

// 11. Primitives vs. Objects (Primitive vs. Reference Types)
let primitive = 42;
let obj2 = { value: 42 };
primitive = 100; // Changes only the primitive value
obj2.value = 100; // Changes the object property

// 12. Primitives vs. Objects in Practice
function modifyPrimitive(primitive) {
    primitive = 100; // This won't change the original
}

function modifyObject(obj) {
    obj.value = 100; // This will change the original
}

let num = 50;
let obj3 = { value: 50 };

modifyPrimitive(num);
modifyObject(obj3);

console.log(num); // 50
console.log(obj3.val