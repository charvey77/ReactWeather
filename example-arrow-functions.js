var names = ['Andrew', 'Chris', 'Bob', 'John'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
 //var returnMe = (name) => name + '!';

//console.log(returnMe('Chris'));

// var person = {
//   name: 'Chris',
//   greet: function() {
//       names.forEach( (name) => {
//         console.log(this.name + ' says hi to ' + name);
//       })
//   }
// }
//
// person.greet();

// challenge area

function add (a, b) {
  return a + b;
}

//
// console.log(add(1, 3));
// console.log(add(0, 9));


var addStatement  = (a, b) => {
  return a + b;
}

console.log(addStatement(4, 7));

var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
