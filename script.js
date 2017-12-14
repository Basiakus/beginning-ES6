
//zadanie 1
const addString = (name = 'Adam', surname = 'Basiak') => console.log(`imię: //${name}; nazwisko: ${surname}`);
// zadanie 2
const multiply = (a, b = 1) => {return a * b};
//zadanie 3
const average = (...args) => {return eval(args.join("+")) / args.length}
//zadanie 4
const args = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(...args);

//zadanie 5
const person = [1, 4, 'Iwona', false, 'Nowak'];
//const [year , month, firstName, isMarried, lastName] = person;
const [ , ,firstName, ,lastName] = person
//console.log([ , ,firstName, ,lastName])








