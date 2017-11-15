/*
  The following example shows how the .reduce() function works. What this does,
  is goes throug the array that has integers and pretty much adds them up.
  You will see how this can be done without .reduce() and use an for statment
  and then how its done with the .reduce.
*/

// the array we will be using
var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// this is using .reduce but not ES6
/* what we are doing here is creating a variable called totalAmount
  From here we are then using the .reduce() on the array orders that we stated above
  .reduce request two varialbes .reduce(x,y). think of x as what is being done and
  the Y as the starting point. so here we are saying x to be a function and y to start at 0

*/
var totalAmount = orders.reduce(function (sum, order) {
  /* Now here we are telling the function to return sum ( which starts at 0 because that what we told it to do)
   and then add what ever the number is for order.amount */
  return sum + order.amount;
}, 0);

// ES16
var totalAmount = orders.reduce((sum,order) => sum + order.amount, 0);

// same thing as above but using a for statement.
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders [i].amount;
}
