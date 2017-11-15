/* so here we are creating a Higher-order Functin (HOF) but using .map().
It works the same way as Filter but instead of taking out and only showing
what you are looking for. Map actually shows the whole array but in another format
*/

// this is the array
var animals = [
  {name: 'Fluffykins', species: 'rabbit' },
  {name: 'Caro', species: 'dog' },
  {name: 'Hamilton', species: 'dog' },
  {name: 'Harold', species: 'fish' },
  {name: 'Ursula', species: 'cat' },
  {name: 'Jimmy', species: 'cat' },
  {name: 'Jose', species: 'fish' }
];

// the below code will go through the aray and tell you all the names in the array


// this is the same HOF as below but in ES6.
// keep in mind that this version WILL ONLY WORK if its in one line.
// if it needs to be split up in two lines it has to be written another way listed underneth.
// if you right it in one line. The "return" is not required and its assumed you are requesting it to be returned.

var names = animals.map((animal) => animal.name);
var species = animals.map((animal)=> animal.species);
/*
// ES16 on two lines.
var names = animals.map((animal) => {
  return animal.name
});

// same as below but not in ES6.
var names = animals.map(function(animal) {
  return animal.name;
});

// not in HOF
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}
*/
console.log(species);
