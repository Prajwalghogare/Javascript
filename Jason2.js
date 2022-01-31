var person = {
    name: "Prajwal",
    age: 23
}
jsonPerson = JSON.stringify(person);
console.log(jsonPerson.name);

jsPerson = JSON.parse(jsonPerson);
console.log(jsPerson.name);