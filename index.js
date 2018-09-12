// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.splice(3,0,name);
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
  kittens.push(name);
}