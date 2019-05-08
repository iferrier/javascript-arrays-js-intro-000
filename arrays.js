var chocolateBars

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return(newArray);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return(array);
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return(newArray);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return(array);
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray([1],"foo");

destructivelyAddElementToBeginningOfArray([1],"foo");

addElementToEndOfArray([1],"foo");

destructivelyAddElementToEndOfArray([1],"foo");
