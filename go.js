const person = {                        
    name : "zunik",
    age : 30,
    say : function() {
        console.log(`hello my name is ${this.name} age is ${person["age"]}`);
    }
};

person.say();

console.log(`name : ${"name" in person }`);
console.log(`age : ${"age" in person }`);
console.log(`gender : ${"gender" in person }`);