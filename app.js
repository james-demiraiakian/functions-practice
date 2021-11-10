//.push()
let array1 = [];

array1.push(0);
array1.push(1);
array1.push(2);
array1.push(3);
array1.push(4);
array1.push(5);
array1.push(6);
array1.push(7);
array1.push(8);
array1.push(9, 10, 11, 12, 13, 5, 15, 16, 17, 18);

//.indexOf()

let array2 = [];

let indexLoc = array1.indexOf(5); // use this logic below to find multiple instances of a value
while (indexLoc !== -1) {
    array2.push(indexLoc);
    indexLoc = array1.indexOf(5, indexLoc + 1);
}

let array3 = [];
array3.push(array1.indexOf(3)); // will push the index of the first instance of the value found

//.slice()

let array4 = array1.slice(2, 5); //takes out a section and puts it in a new array
let array5 = array1.slice(12); //cuts off the second half and puts it in a new array

//.toString()

let stringArray = array1.toString();

//.filter()

let array6 = array1.filter(function isGreaterThan(x) {
    return x > 10;
});

//.join()

let array7 = array1.join(' ~ ');

//.splice

let array8 = array1;
let arrayRemoved = array8.splice(7, 4, 100);

//.forEach()

let array9 = [];

array1.forEach(element => {
    element = element * 2;
    array9.push(element);
});

// console.log('.push() ', array1);
// console.log('.indexOf() multiple ', array2);
// console.log('.indexOf() single ', array3);
// console.log('.slice(2, 5) ', array4);
// console.log('.slice(12) ', array5);
// console.log('.toString() ', stringArray);
// console.log('.filter() > 10', array6);
// console.log('.join()', array7);
// console.log('.splice()', array8);
// console.log('.splice() removed', arrayRemoved);
// console.log('.forEach()', array9);

//.map

const map1 = new Map();

map1.set('a', 0);
map1.set('b', 1);
map1.set('c', 2);
map1.set('d', 3);
map1.set('e', 4);
map1.set('f', 5);
map1.set('g', 6);
map1.set('h', 7);
map1.set('i', 8);
map1.set('j', 9);

console.log('map1', map1);

//mapped array

let mapArr = array1.map(x => x % 3);

console.log('array1.map(x => x % 3)', mapArr);

let mapSize = map1.size;

console.log(mapSize);

map1.delete('a');

console.log(map1);
map1.set('a', 0);

let mapGet = map1.get('a');

console.log(mapGet);

let mapHas = map1.has('g');

console.log(mapHas);

let keys = map1.keys();
let values = map1.values();

console.log(keys, values);

let mapEntries = map1.entries();

console.log(mapEntries);

map1.forEach(function(value, key) {
    map1.set(key, value / 2);
});

console.log(map1);

map1.forEach(function(value, key) {
    map1.set(key, value * 2);
});


