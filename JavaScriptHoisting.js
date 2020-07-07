// Problem 1
console.log(hello);
var hello = 'world';
// Below is how the JS Interpreter reads the code:
// var hello;
// console.log(hello); // logs undefined

// Problem 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// Below is how the JS Interpreter reads the code:
// var needle
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }

// Problem 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Below is how the JS Interpreter reads the code:
// Because the function is never called, var brendan's value is never re-set to: 'only okay'
// since that change only exists within the scope of the function.

// Problem 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Below is how the JS Interpreter reads the code:
// var food = 'chicken';
// console.log(food);
// Output = "chicken"
// Then the function is hoisted ABOVE the Call:
// function eat(){
//         food = 'half-chicken';
//         console.log(food);
//         var food = 'gone';
//     }
// eat(); <--Call is now on this line because of hoisting.
// logs "half-chicken" from Function Call.
// The last variable re-set is never returned or console.logged.

// Problem 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Explanation:
// This will result in an error because
// we tried to invoke 'mean()' before we assigned the function to it.

// Problem 6
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
// Explanation:
// "disco" will output:"undefined" because the declaration will be hoister before the value is set.
// Output will be:
// undefined
// "rock"
// "r&b"
// "disco"

