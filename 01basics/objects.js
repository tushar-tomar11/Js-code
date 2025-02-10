//objects literals

const JsUser = {
    name: "Tushar tomar",
    email: "tushartomar321@gmail.com",
    age: 18,
    rollno:2200321530181,
    isLoggedin: false,
    LastloginDays: ["Monday","Friday"]
}

/* Ways to Acccesss   =>    1. using dot (but can not always be used)
                            2. using [""] as a string
*/
console.log(JsUser.name)
console.log(JsUser["isLoggedin"])


// creating Symbol in Js
 const mysum = Symbol("Key1")

// adding function to objects

JsUser.greetings = function()
{
    console.log("hello Js user");
    
}
JsUser.greetings2 = function () {
    console.log(`hello js user ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());

