/*
  Below is a simple example on how arrow functions have made life a little easier
  the structur is, we have an oject for dragonEvent. this might be some kind of game.
  what we are trying to find is what is the total damage for player-dorkman.
  currently without arrow function we would have to do a all the code listed below.

  for understanding on what is going on, you might need to research what
  the filter, map and reduce funtions do.
*/

const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' }
];

// using arrows 'single line'. By this it means that you do the .filter/.map/.reduce all on one line
// doesn't mean your doing the whole thing on one line. This normally only works if your are
// just passing one argument per function using arrows. anything other then taht. do as the example
// below this one.
const totalDamageOnDorkman = dragonEvents
  .filter(event => event.type === 'attack')
  .filter(event => event.target === 'player-dorkman')
  .map(event => event.value)
  .reduce((prev, value) => (prev || 0 ) + value);

// using arrows multi line
/*
const totalDamageOnDorkman = dragonEvents.filter((event) => {
  return event.type === 'attack';
}).filter((event) => {
  return event.target === 'player-dorkman';
}).map((event) => {
  return event.value;
}).reduce((prev, value) => {
  return(prev || 0) + value;
});
*/
console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);

/*
// not using arrow's
const totalDamageOnDorkman = dragonEvents.filter(function(event){
  return event.type === 'attack';
}).filter(function(event) {
  return event.target === 'player-dorkman';
}).map(function(event) {
  return event.value;
}).reduce(function(prev, value){
  return(prev || 0) + value;
});

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);
*/
