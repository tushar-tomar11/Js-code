const marvel = ["ironman","spidy","captain"];
const dc = ["green","wonderman","batman"];


//Concat
const p = marvel.concat(dc);
console.log(p)

//Spread
const g =[...marvel,...dc]
console.log(g)

//flat=> combinees two or more arrays into one single array 

const all_array =[1,2,3,[4,5,6],[6,7,8,9]]
console.log((all_array.flat(Infinity)))

//of = convert normal datatypes into array
let score1=100
let score2=200
let score3=400

console.log(Array.of(score1,score2,score3))