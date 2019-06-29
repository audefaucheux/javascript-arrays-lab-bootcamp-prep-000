var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
    return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var kittens2 = kittens.concat(name,kittens)
  return kittens2 //.slice(3)
}

//function removeLastKitten(name) {
//  return kittens.slice()
//}
