// declaring objects in js
//1 singleton
const tinderUser = new Object()

//2 non-singleton
const tinder ={
    name: "Tushar tomar",
    email: "tushartomar321@gmail.com",
    age: 18,
    rollno:2200321530181,
    isLoggedin: false,
    LastloginDays: ["Monday","Friday"]
}

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


