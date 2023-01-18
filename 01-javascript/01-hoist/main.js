// GIVEN
console.log(example);
var example = "I'm the example!";

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// GIVEN
console.log(hello);                                  
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';


//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
/* 
    var needle
    funcion test()
    needle = "haystack"
    var needle
    needle = "magnet"
    logs "magnet"
*/


//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
/*
    var brendan
    brendan = "super cool"
    funcion print()
    brendan = "only okay"
    logs "super cool"
*/


//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
/*
    var food
    eat()

    food = "chicken"
    logs -> "chicken"
    funcion eat()
        food = "half-chicken"
        logs -> half-chicken
        var food
        food = "gone"
*/


//GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
/*
    var mean
    TypeError: mean is not a function
*/


//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// AFTER HOISTING BY THE INTERPRETER
/*
    var genre
    rewind()
    logs-> undefined
    genre = "disco"
    logs -> "rock"
    genre = "r&b"
    logs -> "r&b"
    logs -> "disco"
*/



// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// learn();
// dojo = "san jose";
// logs-> 'san jose'
// dojo = "seattle";
// logs-> 'seattle'
// dojo = "burbank";
// logs-> 'burbank'
// logs-> 'san jose'

// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
// Cannot assign to "dojo" because it is a constant