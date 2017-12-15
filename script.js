
//zadanie 1
const name = "Adam";
const surName = "Basiak"
console.log(`imię: ${name}; nazwisko: ${surName}`);
// zadanie 2
const multiply = (a, b = 1) => {return a * b};
//zadanie 3
const average = (...args) => [...args].reduce((a, b) => a + b, 0) / args.length;
//zadanie 4
const notes = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(...notes);
//zadanie 5
const person = [1, 4, 'Iwona', false, 'Nowak'];
//const [year , month, firstName, isMarried, lastName] = person;
const [, ,firstName, ,lastName] = person
console.log([, ,firstName, ,lastName]);



