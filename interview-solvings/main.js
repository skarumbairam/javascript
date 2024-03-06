/**
 *
 *
 * Js Concepts - https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=MqdiWuQx1ymrsch1
 * https://youtube.com/playlist?list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&si=f3h6wJ820ggue8mL
 * JS Questions - https://www.frontendinterviewhandbook.com/javascript-questions
 * https://jsvault.com/
 * Systemm Design - https://github.com/karanpratapsingh/system-design?tab=readme-ov-file
 *
 */
console.log("============== Nested Function Concept =====================");
// 1. Nested funtion concept & varable scopes Lexical scope
/**
 * As we know JS supports nested functions,
 * the variable declared in t  he inner function have access to own scope
 * as well as have access variable declared outer scope
 * Lexical scope means nothing, if a variable is not available in the inner most function,
 * will check one step outer, if still not check globally, moving outwards
 */

/**
 *  Scope : Where you can access a specific variable or function in our code
 *  Scope is directly dependent on lexical environment
 *  lexical env- lexical env is local memory along with lexical environtments of its parent
 * considering line 32, Js looks a is available from local memory of inner execution context
 *
 * Lexical means hiarchie, sequence, in order.. example inner fn is lexically present inside outer function, outer lexically present main functions, similarly main is lexically placed on global
 *
 */
let a = 0;
function main() {
  let b = 1;
  function outer() {
    let c = 2;
    function inner() {
      let d = 3;
      console.log(a, b, c, d);
    }

    inner();
  }
  outer();
}
main();

console.log("==============Closure =====================");
//2. Closure

/**
 * A closure is the combination of functions bundled together withe references to its surrounding state
 * A clouser is a function binding together with its lexical environment or function along woth lexical scope forms a Clouser
 * Closure are created every time a function created at a function creation
 *
 * As we konw js can return other function, so instead invoking fn immediately return and invoke later point of time
 *
 * In different words,
 * In javascript When we return a function from another function, we are effectively returning a combination of the function defination along with function's scope
 * This would let the function defination have an associated persistent memory which could hold on to live data between execution
 * The combination of the function and its scope chain is what is called closure of javascript
 *
 * Use of closure
 * Module Design pattern
 * Currying
 * Function like once
 * Memozie
 * Maintain state in async scrips
 * setTimout
 * Iterators
 * and many more..
 *
 * Disadvantage
 * Over consumption of memory (accumulating) if properly handled may leads to memory heap
 *
 * Carbage collect is programe in JS engine which cleaned up unused variables
 */

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("closure --->", count);
  }
  return inner;
}

const counter = outer(); // new outer ()
counter();
counter();
counter();

// another example

function closure1() {
  for (var i = 0; i < 5; i++) {
    // this can be meticate easily using let
    function close(i) {
      // everytime creates local memory with function scope
      setTimeout(function () {
        console.log(i); // this will refer to i with its last value if this not wrapped
      }, 1000 * i);
    }
    close(i);
  }
}

closure1();
console.log("==============currying =====================");
// 3. Function currying
/**
 * Currying is process in functional programming, in which we transform a function with multiple arguments into sequence of nesting functions
 * that take one argument at a time
 */

function sum(a, b, c) {
  return a + b + c;
}

const add = sum(2, 3, 5);
console.log("currying add -->", add);

// now we transforming to sum (2)(3)(5);

function currying(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSummation = (a) => (b) => (c) => a + b + c;
console.log("Arrow Fun ->", curriedSummation(3)(4)(2));

//const sum1 = currying(2)(3)(5);
const curriedSum = currying(sum);

console.log("currying transformed -->", curriedSum(1)(2)(3));

console.log("==============This key word usage =====================");
// 4. this key word

/**
 *
 * The Javascript 'this' key word used in a function, refers to the object it belongs to
 * It makes function re-usable by letting you decide the object value
 */

function sayMyname(name) {
  console.log("My Name is --" + name);
}

// implicit binding, explict binding, new binding & default binding

const Person = {
  name: "viswas",
  sayMyname: function () {
    console.log("My name is implict binding" + this.name);
  },
};

Person.sayMyname(); //  using dot notation sayMyName () is refering to Person Object, this referss the person

// explict binding

function sayMyName(name) {
  console.log("My name is explict binding " + this.name);
}

sayMyName.call(Person);

// new binding

function PersonName(name) {
  // creating internally this = {} this always reference new empty object
  this.name = name;
}

const p1 = new PersonName("Senthil"); // constructor function creates new person
const p2 = new PersonName("Kumar");

console.log("My Name is ---->", p1.name, p2.name);

// 5. Async Javascript
/**
 * Why - >Synchornus, blocking, singlethreaded
 * How ->
 *
 * Synchornus: The Javascript executes the code line by line from top to bottom once in a time For example we have two function A, B
 */

function A() {
  console.log("Fun A Called");
}
function B() {
  console.log("Fun B Called");
}

A();
B();

/**
 *
 * Blocking : In Javascript considered there are two function A&B as we know its is synchornus and the A function has lot chunk code and takes to more time execute it can be 6,7, 10 secs
 * it wont kickoff the B function untill previous function execution completes. We may have encounter such scnario browsers when give some input will hang, ask you popup wait or exit code
 * Lets consider A1 has lots of item to iterate 10000
 */

function A1() {
  const array = ["Seeds", "Trees", "Vegetables", "Fruites"];
  console.log("Fun A Called");
  for (const item of array) {
    console.log("I am executing Array Items ->", item);
  }
}
function B1() {
  console.log(
    "After all execution completed my previous Funtion/Task, I am called now Fun B Called"
  );
}

A1();
B1();

/**
 * Single threaded : A thread is simply process that Javascript program can use to run task.
 * Each thread can run only one task
 * Javascript has no multi thread, it can't handle multi task at a time, it can execute only one task at a time
 *
 * How do we cater Async Js: It can't hanle only by Js, there webrowser comes to picture
 * Lets take a look how can we achive multi task, paralle task in javascriptS
 * To make async programmig task possible javascript alone is not enough, need web browser
 * To support multi tasking, parallel task Javascript needs Async, await, need some browser API;'s like setTimeout, setInterval, Click etc.
 *
 */

const intervalId = setTimeout(
  (param) => {
    console.log(
      "Hello, (Callback use case) I will be called affter 2 secs",
      "called by " + param
    );
  },
  2000,
  "senthil"
);

B1();

console.log("==============Callback =====================");
// 6. Callback

/**
 * Why - > Synchornus callback, asynchornus callback, Callbackhell
 * Callbackhell
 *
 *
 * Callback : In javascript functions are first class object (An entity of which value can be passed as argument, retrun from a FN and assign to a variable)
 * Just like object, Any function that is passed as an argument to another function is called callback function in JS
 * The Function which accepts a function as an argument or returns a function is called a higher order function
 *
 * Synchornus callback : A callback FN executes immediatly is called Synchornus callback example [].sort( (a,b) => a-b ), [].filter(n =>n%2 ==0), [].map( n=>n*2)
 *
 * Asynchornus callback : A callback FN executes or wait for an event occures or delaying in execution is called Asynchornus callback
 * Callback function allow you to delay the execution of a function
 * Exmple 1. setTimOut (A, 2000) call Funtion A after 2secs
 * Example 2. doccument.getElementById("#btn").addEventListener('click',callbackFn) // callbackFn is called when user interact with btn element
 *
 *Problem with Callback
 * callbackhell: If we have multiple callback function wheare each level depends on the result obtained from previous level,
 * The nesting of functions becames so deeper, the code becomes difficult to read and maintain
 */

//Callback hell: this is difficult to read and maintain
/*
fetchCurrentUser("/api/user", function (result) {
  fetchFollowersByUser(`api/followers/${result.userId}`, function (result) {
    fetchFollowereIntrests(
      `/api/intrests/${result.folloersId}`,
      function (result) {
        // ... goes on
      }
    );
  });
});
*/

console.log("============== Promise =====================");
//7. Promises
/**
 * The promise reperesents eventual completion or failure of asynchronus operation and its resulting value
 * It holds e state (pending, fullfiled, rejeccted)
 * It the state of promise can fullfilled with value or rejected with reason
 *
 * Why promises - to avoid callback hell
 * How Promises
 * In real world example give better explaination
 *  Dinner situation
 *  You have a friend in your room
 *  You are asking him to get some side dish(chicken) from nearest hotel
 *  He goes to hotel, meanwhile you are asking him to text/msg wheather you get chicken if not I will get ready some egg at home
 *  He says sure
 *
 *  Now fit this situation to Promise
 *
 *  */

const firend = new Promise((resolve, reject) => {
  // async operation
  // resolve("Test");
  // reject("Test 2");

  let flag = "B";
  if (flag === "A") {
    resolve("Chiken available");
  } else {
    reject("Chiken is not available");
  }
});

function onRejection(error) {
  console.log("Lets have dinner with Egg since ", error);
}

function onFullFillment(result) {
  console.log("Lets have dinner with ", result);
}

function planDinner() {
  firend.then(onFullFillment).catch(onRejection);
}

planDinner();

/**
 * Resolving Call back hell using Promise
 *
 * const promise = fetchCurrentUser('/api/user')
 * Promise
 *  .then(result => fetchFollowersByUser('/api/${result.userId}'))
 *  .then(result => fetchFollowereIntrests('api/${result.followrsId}'))
 *  .then (resutl => ....)
 */

/**
 * Promise static methods
 * 1. Promise.all() :
 *      Takes iterable of promises as an input and returns single Promise that resolves to an array of the result of the input promises
 *      Returned promise will resolve when all of the input's promises have resolved
 *      It rejects immediately if any one of the promises reject or the non-promises throw an error and will reject first rejection message / error
 *
 * 2. Promise.settled()
 *      Waits for all input promises to complete regardles wheather promises are reject or complete
 *
 * 3. Promise.race()
 *      Returns a promise that fullfills or rejects as soons as on of the input promises fullfill or rejects with the value or reason from promise
 */

const promise1 = Promise.resolve("Done");
const promise2 = 45;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log("Promise all ", values);
});

// 8. How Javascript execute code
/**
 *
 *
 * Everything in javascript happens inside an Eecution context
 *  lets take below example
 *
 */

const m = 2;

const square = function (num) {
  const ans = num * num;
  return ans;
};
const num1 = square(4);
const num2 = square(3);
console.log(num1, num2);

/**
 * lets take a look how JS executed above code
 *
 * There is a global execution context is create conside like a big box
 * The execution context has two components i.Memory component ii. Code component
 * Memorey component allocate meomry for all variables and functions as key value pairs
 * m: undefined, fn : {... full code}, num1:undefined , num2: undefined;
 * In Code component phase reading the code line by line and assigning the value to allocated memory
 * Read lin 331 as m=2 and set m:2, theres nothing to read line 333 to 336, goes to line 337
 * Now square(4) FN is invoked, now (new) local execution context is created (memory component, code component)
 *  set num, ans as undefined in memory component, then by reading the code set num : 4, and ans : 16; and return
 *  When returns moved to global execution context and assigned value to num1.
 * Similarly line 338 read square (3) gets invoked, and local execution context is created
 *  set num, ans as undefined initally by reading the code and assigning the value and retruns
 * When returns, moved to global execution context and set num2 as 9
 */

/**
 * Callstack, program stack,
 *
 */

// 9. What is Hoisting

/**
 * Hosting is phenominal in javascript by which we can access function, variable even before we initializing it
 * In other words, variables and functions scopes moved top before executing it
 */

//console.log(x); // undefined
//hFn(); // undefined
//hFn2(); // F2

//console.log(y); // not defined

let x = 2;
let hFn = () => {
  console.log("F1");
};
function hFn2() {
  console.log("F2");
}

console.log(x);
hFn();
hFn2();

/**
 * In above example, the out put for x , hFn(), hFn2() would log 2, F1, F2 respectively
 * If we move console.log or trying to access before initializing the varaibles
 * we would get undefined, undefined and F2,
 * which means in the javascript has created momory for all variables and functions before they executed but value has not assigned
 *
 * incase same case in some other programm we will get an error, but javascript not
 *
 * However the function will execute if it is a normal fn syntex,
 * If we assing a FN to a variable or as arrow FN will get as undefined
 *
 * If we try to access variable 'y' which is not initated in the code we will get not-defined,
 * which means JS will allocate memory and assinged default value as undefined for only initiated variables in the code
 * Here we have not intiate y variables and not allocated memory for that, so getting error not defined
 *
 */

/**
 *
 * Explain how below function works in JS, ling global execution context, memory component (vaiable env) (global memory, local memory), code component and callstack
 *
 *  var x = 1;
 * a();
 * b();
 * console.log(x)
 * function a() {
 *  const x = 10;
 *  console.log(x)
 * }
 * function b() {
 *  const x = 100;
 *  console.log(x)
 * }
 *
 *
 */

// 10. What is shortest programme in JS

/**
 *  The shortest JS programe is.. even we run empty JS file the JS engine creates global context,
 *  we can see the methods which attached window or this object and able to access it
 *
 */

// 11. Why JS loosly type programm

/**
 * Javascript we can initate variable whitout data type mentioning
 * console.log(a) // undefined
 * let a = 10;
 *  console.log(a) //10
 *  a = "I am good"
 * console.log(a) // I am good
 *  a = false;
 * console.log(a) // false
 *
 * So from above this, Js is loosly type programe which means that its not good and bad..
 * JS engine doing in the background by identyfing automatically and runs based on the type of variable
 * We can think this way, however other language c, Java has to mention type of variabel
 *
 */

// 12. let, const, Temporal dead zone, Syntex Error vs Reference Error Vs TypeError

/**
 *
 * let & const declaration are hoisted? - yes they are hoisted but differently which means they are hosisted in the temporal dead zone
 * however let, const has memory space, which is available in execution context but
 * Which means let, const allocated memory but stored in different memory space instead global like var
 * So from hoisting to assign a value between the phase is called temporal zone
 *
 * console.log(a) // undefined
 * console.log(a) // will give reference error, which means a can't be access before initializing
 * const a = 0; // temproal dead zone ends
 * var b = 1;
 *
 *
 * Reference Error:
 * Whenever if we try to access a variable inside temporal dead zone it gives Refernce error (can't be accessed before initializing), we can access the variable once the value initialized and assigned
 * if we console.log(x) some random the out put is reference error but JS try to find a variable x as it is not defined throw error as " reference error x is not defined"
 * JS trying to find a specific variable inside the momory space and you can't access it throw ref error
 *
 * SyntaxError:
 *
 * It rejects upfront, wont run single line of code
 * Use case, variables are duplicated, it is specifically let, const not for var
 * One more use case, declaring const variable and try to assing later in the code
 *
 * const a ;
 *
 * a = 10; // Syntax error Missing initializer
 *
 * same thing can do for let;
 *
 * let a;
 * a  =20;
 *
 * out put // 20
 *
 *Type Error:
 * While definiting itseld initializing the variable liek const a = 100; later if you try to check a = 20 // then it will give you the type error
 */

// 13. Block scope & Shadowing

/**
 * Let and Const block scope is part of internal scope not part of globalscope
 * What are variables, function is accessed inside { } is called block scope
 * {
 *     const a = 0;
 *     const b = 1;
 * }
 *
 * In JS shadowing is can experince in var
 *
 * var a = 100;
 *
 * {
 *  var a = 10;
 *  console.log(a) // output 10
 * }
 *
 * console.log(a ) // out put 10
 *
 * The reason is a is hoisted and attached to global scope, later point of time it replace the value by 10
 * var a in both place  is refering to globalscope
 * This is called shadowing in JS
 * However this wont happen in block scope of let
 *
 * let a = 100;
 *
 * {
 *  let a = 10;
 *  console.log(a) // 10; this a is referes block scope memory
 * }
 *
 * console.log(a) // 100 this refers to script scope scoper memory
 *
 * Illigel shadow
 *
 *  let a = 0;
 * {
 *  var a =10// this is throw an error it is illegal error
 * }
 *
 */

// 13. FUnctions

/**

1. Function Statement or function declaration

hoisted - which means before declration, initialization able to access the function

function a () {
// To do 
}


2. Function Expression

// not hoisted can't access 'a' before initialization  its available in temporal deadzone
const a = function () {

}


3. Anonymus function
 // function with out name is called anonyms function, which can use as value and can assign or pass to variables or functions
 function () {
 }

4. Named Function expression

const a = function abc () {

}
a() // expected
abc()// error not defined


5. Diiference between params and arguments

function a (param1, param2)
{
    the value which recieves from a function is called params, it can refere lable, identifiers, local variables
    1. param1, param2 these identifiers, lables or local variables called as parameters
    console.log(param1, param2);
}

a(1, 2) // this is arguments, the value which is passed into function is called arguments


6.First class functions

A function which can can be passed to another function as arguments and that function can return as function is alled first class function

IN othe promgrame function can't be used as values 

function a () {

    return function(){
    }
}

const b = function () {
}

function a (b) {
    return b;
}
8. Arrow Functions


*/

// Event Loop

