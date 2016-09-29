var someFunc, countup, counter, otherFunc;

// Closures

// 1. Create a function called someFunc that takes in a number and returns the definition of another anonymous function. That anonymous function will take in a second number and will return the sum of both numbers.

var someFunc = function (num) {
  var anonymous = function(secondNum) {
  return (num + secondNum);
};
return anonymous;
};

// Invoke the someFunc function, and pass in a number value (Let's use number 9) as the argument. Assign the response to another variable called otherFunc.

someFunc(9);
otherFunc = someFunc;

// When you are done, we can invoke the otherFunc function and pass in another number value as its argument. And we can do this as often as we like. Go ahead and uncomment out the following invocations.

otherFunc(10) // 19
otherFunc(26) // 35
otherFunc(100) // 109
otherFunc(1) // 10

// You have just created your first closure. What you have essentially done is contained a fixed inputted number value in the local someFunc scope, while allowing the user to run an internal function as often as he likes using any valid number argument.

// When you assign the invocation of someFunc to the otherFunc variable, you are assigning the definition of an entirely new function.


// 2. Next, you will create a counter closure function that can be called at any point and will retain the number's new value even after being called over and over again.

// Create a function called countSet, no parameters needed, and set a new variable (call it countup) to equal 0. Have the function return an anonymous function that returns the countup variable after being incremented.

var countSet = function (){
  var countup = 0;
  return function () {
    countup++;
return countup;
  };
};


// Assign the invocation of the countSet function to a new variable. Let's call it counter.

var counter = countSet ();

// Then whenever you need to count up, you can invoke the counter function. Go ahead and uncomment out the following invocations.

counter()//1
counter()//2
counter()//3
counter()//4

module.exports = {
  someFunc: someFunc,
  otherFunc: otherFunc,
  countup: countup,
  counter: counter
};
