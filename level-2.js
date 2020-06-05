// Question 1

for(var counter = 15; counter <= 25; counter++) {
    if(counter % 2 === 0) {
        console.log(counter);
    }
} // seem to work, is this a good way to do it?


// Question 2

function selfAware() {
    console.log("I am a function");
}

var innerFunction = selfAware();

function outerFunction(anArgument) {
    anArgument(); // got lost here... I'm getting a console error saying that anArgument is not a function. Obviously it's not, but the question says "Inside  outerFunction, call the argument like you would a function - with parenthesis()" Am I misunderstanding it?
}

outerFunction(innerFunction);