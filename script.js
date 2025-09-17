//Variable declaration and conditional statement

let age = 20;

if(age < 18 ){
    console.log("You are a minor.");
}
else if(age >= 18){
    console.log("You can vote successfully")
}
else{
    console.log("Invalid age input");
}


// for loop in javascript

let loopCount = 5;
for(let i = 1; i <= loopCount; i++){
    console.log("This is loop iteration number: " + i);
}

// while loop in javascript
let count = 1;
while(count <= 5){
    console.log("While loop count: " + count);
    count++;
}

// foreach loop in javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit){
    console.log("Fruit: " + fruit);
});

// function declaration and invocation
function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

