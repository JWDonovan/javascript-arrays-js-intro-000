var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  let arr = [element, array...];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, array...];
}

function addElementToEndOfArray(array, element) {
  let arr = [array..., element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}

function accessElementInArray(array, index) {
  return array.indexOf(index);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.splice(1);
}

function removeElementFromBeginningOfArray(array) {
  let arr = array.splice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.splice(array.length - 1);
}

function removeElementFromEndOfArray(array) {
  let arr = array.splice(array.length - 1);
}
