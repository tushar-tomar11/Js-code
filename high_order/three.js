// updated form of for loop is " For of Loop"
 // used to iterate Maps,array

 /* 
 Summary(As I understood) :
 For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
 For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
 forEach loop For iterating {{Over Arrays}} and its values as well.
*/

const val = "Helloo Mars"

for(const greet of val)
{
   console.log(`each charcter is ${greet}`);
    
}


// Map => is a type of object in Js that holds a key-value pairs

const ma = new Map()

ma.set("IN","India")
ma.set("USA","United States")

console.log(ma)


// for in loop is used to iterate objects

const JsUser = {
    name: "Tushar tomar",
    email: "tushartomar321@gmail.com",
    age: 18,
    rollno:2200321530181,
    isLoggedin: false,
    LastloginDays: ["Monday","Friday"]

}

for (const key in JsUser) {
    console.log(key);
    console.log(JsUser[key]);
}

// usinf for each looop

const coding = ["Java","kotlin","ruby"]

coding.forEach( (items) => {
    console.log(items);

});