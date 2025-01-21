function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
    return persons.map(person => `Hello, ${person}`);
}

let user = ["John", "Jane"];

console.log(greeterArray(user)); // This will work correctly
//console.log(greeter(user)); // This will still cause an error if uncommented.