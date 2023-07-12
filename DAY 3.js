//charAct
const bro = 'ME RANDU HAZEL HARVANI';
const index = 9;
console.log(`The character at index ${index} is ${bro.charAt(index)}`);

//concat(string)
const arr1 = ['randu', 'hazel', 'harvani'];
const arr2 = ['hazel', 'harvani', 'randu'];
const arr3 = ['valega', 'dirly'];
const arr4 = arr3.concat(arr2);
console.log(arr4);

//indexOf(string)
const M = 'HAZEL';
const L = bro.indexOf(M);
console.log(`The index of the first "${M}" from the beginning is ${L}`);

//substring()
console.log(bro.substring(5, 9));
console.log(bro.substring(15));

//substr()
console.log(bro.substr(5, 9));
console.log(bro.substr(9));

//touppercase()
console.log(bro.toUpperCase());

//tolowercase()
console.log(bro.toLowerCase());
