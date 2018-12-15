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
        for(var i = 0; i < this.foodList.length; i++){
            if(foodParameter === this.foodList[i]){
                doesHeEatIt = `The lion eats the ${foodParameter}`;
                break;
            } else {
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



// Give this object a method called `roar`

// Invoke the method

// Make another object called antelope and give it a food list




// Invoke the method
antelope.saySomething();



// Give the lion a method called eat that takes a parameter of "food". It should log "The lion eats the [food]" to the console


// Give the antelope a similar eat method

// Have the antelope eat some grass

// Have the lion eat the antelope


// Refactor the method so that it loops through the prey list and checks to see if the parameter you passed in is on the prey list. If so, say the lion is eating it. If not, say the lion isn't interested.

// Instead of logging it to the console, return an html string about the eating and prints it to the DOM

