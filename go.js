const getName = (person) => {
    const name = person && person.name;
    return name || "no object";
}
let person = null;
const name = getName(person);
console.log(name);
