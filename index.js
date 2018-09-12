// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name);
}
function destructivelyRemoveLastKitten() {
  kittens.splice(2,1);
}
function destructivelyRemoveFirstKitten() {
  kittens.splice(0,1);
}
function appendKitten(name) {
  var test = kittens.concat(name);
  return test
}
function prependKitten(name) {
  var newKittens = kittens.splice(0,0,name);
  return newKittens;
}

1) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

      Error: Expected [] to equal [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]
function removeLastKitten() {
  var test = kittens.slice(0,2);
  return test;
}
function removeFirstKitten() {
  var test = kittens.slice(1,3);
  return test;
}