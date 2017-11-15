// This is an array of all the possible animales we can select
//we are going to show how, Higher-order functions work

var animals = [
  {name: 'Fluffykins', species: 'rabbit' },
  {name: 'Caro', species: 'dog' },
  {name: 'Hamilton', species: 'dog' },
  {name: 'Harold', species: 'fish' },
  {name: 'Ursula', species: 'cat' },
  {name: 'Jimmy', species: 'cat' },
  {name: 'Jose', species: 'fish' }
];

// This is a Higher-order function. What makes a Higher-order function (HOF for short)
// is having a function inside a function attached to a variable.

// here we have a variable called dogs and its = to the animals.filter() function
// inside the .filter() we have an annoynamise function (a function inside a function)
// that is going to return animal.
var dogs = animals.filter(function(animal){
  // now here we have animal.species looking for dog which will then go into the
  //.filter() to filter out.
  return animal.species === 'dog';
});



/*
// this is not an HOF because its doing a for loop and than in if statement.
// this is techinally correct but it can get messy later on and its not
// really reusable.
var dogs = [];
for (var i = 0; i < animals.length; i++){
  if (animals[i].species === 'dog')
    dogs.push(animals[i]);
}
