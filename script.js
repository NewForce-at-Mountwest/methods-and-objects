// lightning exercise review

// Exercise One
// 1. Create an object that represents a lion

// var lionObject = {
//     name: "Hank",
//     foodList: ["antelope", "zebra", "warthogs"],
//     isCarnivore: true
// }
// 2. The object should have the following properties: name (a string), foodList (an array), and isCarnivore (a boolean)
// Exercise Two
// 1. Create a function that logs the word "ROARR" to the console.
// function sayRoar (){
//     console.log("ROAR");
// }
// // 2. Call the function.
// sayRoar();

var antelope = {
    name: "Jerry",
    species: "antelope",
    foodList: ["grass", "weeds", "flowers"],
    isCarnivore: false,
    saySomething: function(){
        console.log("The antelope is quiet.")
    }
}


antelope.saySomething();


// Build an object representing a lion
// It should have a name and a food list
var lionObject = {
    name: "Hank",
    foodList: ["antelope", "zebra", "warthogs", "Jerry"],
    isCarnivore: true,
    sayRoar: function  (){
        console.log("ROAR");
    }, 
    eat: function(foodParameter){
        var doesHeEatIt;
        // Loop through the food arary
        for(var i = 0; i < this.foodList.length; i++){
            // Check to see if what you passed in is the same as the current food you're iterating over
            if(foodParameter === this.foodList[i]){
                // if so, reassign doesHeEatIt and stop looping
                doesHeEatIt = `The lion eats the ${foodParameter}`;
                break;
            } else {
                // if not, reassign doesHeEatIt and stop looping
                doesHeEatIt = "The lion isn't hungry.";
            }
        }
        console.log(doesHeEatIt);
    }
}

console.log(lionObject.name);
lionObject.sayRoar();
lionObject.eat("Pizza");
lionObject.eat(antelope.species);
lionObject.eat(antelope.name);









