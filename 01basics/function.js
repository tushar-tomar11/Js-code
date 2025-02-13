//Immediately Invoked function expression (IIFE)

//named IIFE
(function chai(){
    console.log("I am tushar Tomar");
})();


//";"  is used to separate two different IIFE
//unmaned IIFE
((name)=>{
    console.log(`i am ${name}`);
    
})
("Tushar")