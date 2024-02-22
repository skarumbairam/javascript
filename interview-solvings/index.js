const __this = this.window;

function exampleOfMapFilterReduceTwo() {
  /**
   *
   * map, filter, reduce are higher ordern function which is part of Array object
   * map -> iterate array of object, map function helps to transform each elements to other form and return as array with transformed elements
   * filter -> Filter, takes iteratble array of objects,  which helps to filter the elements to match specific condition and returning the array of elements
   * reduce -> Takes input as array and the callback function takes two parameters accumlation, current (element)
   */
  const users = [
    {
      firstname: "Senthilkumar",
      lastname: "Karumbairam",
      age: 22,
      city: "Chennai",
    },
    {
      firstname: "Mathan",
      lastname: "Naraynan",
      age: 25,
      city: "Chennai",
    },
    {
      firstname: "Suresh",
      lastname: "Kumar",
      age: 35,
      city: "Kovai",
    },
    {
      firstname: "Muthu",
      lastname: "Kumar",
      age: 38,
      city: "Madhurai",
    },
    {
      firstname: "Vinod",
      lastname: "Kumar",
      age: 30,
      city: "Truvandrum",
    },
  ];
  // Join the first and last name

  const userName = users.map((item) => `${item.firstname} ${item.lastname}`);
  // Filter user who less 35
  console.log(userName);

  const userLess35 = users.filter((item) => item.age < 35);
  // user less35 and their names
  const userLess35Names = userLess35.map((item) => item.firstname);
  console.log(userLess35Names);

  // find user name people less than equal 30 using reduce

  const arrObj = users.reduce((acc, curr) => {
    if (curr.age <= 30) {
      acc.push(curr);
    }
    return acc;
  }, []);
  console.log("obj", arrObj);
  // getting their name
  const names = arrObj.map((item) => item.firstname);
  console.log("obj", names);
}
function exampleOfMapFilterReduceOne() {
  const arr = [2, 5, 8, 12, 56];
  // find sum of all elements
  const output = arr.reduce((sum, curr) => {
    sum = sum + curr;
    return sum;
  }, 0);
  // filter number which has gt 5; and sumof those numbers

  const gtFive = arr
    .filter((item) => {
      if (item > 5) return item;
    })
    .map((item) => {
      return item * 2;
    })
    .reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);

  console.log(gtFive);
}
//exampleOfMapFilterReduceTwo();
//exampleOfMapFilterReduceOne();
function functionalProgramming() {
  /**
   * Funtonal programming or higher order function
   * The function which accepts another function and returning a function is called higher order functions
   * The higher order function mostly used on functional programming, whichmeans break down small things to function and reusing it
   * The functional programming is clean, reusable, scalable
   * map, filter, reduce some example of higher order function build using functional programming
   *
   */
  // calculate area of circle for following radius
  const radius = [2, 4, 6, 8];

  // standard way
  const areaOfCircle = (array) => {
    const area = [];
    for (let index = 0; index < array.length; index++) {
      const radius = array[index];
      area.push(Math.PI * radius * radius);
    }
    console.log("Area of Circel", area);
  };
  areaOfCircle(radius);
  // other way
  const calculateArea2 = radius.map((x) => Math.PI * x * x);
  console.log(calculateArea2);

  // third way functional program approach
  const circelArea = function (r) {
    return r * r;
  };
  const circleCircume = function (r) {
    return 2 * Math.PI * r;
  };

  const calculate = function (arr, logic) {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
      const radius = arr[index];
      result.push(logic(radius));
    }
    return result;
  };

  console.log("calculating Area of Circle", calculate(radius, circelArea));
  console.log(
    "calculating Circumfrence of Circle",
    calculate(radius, circleCircume)
  );
}
//functionalProgramming();
function callBackExample() {
  /**
   * A function which is passed to another function and is called callback functions
   * The callback function would execute at some later inside the mainfunction
   *
   */
  const callbackAddFn = (a, b) => {
    return a + b;
  };
  const callbackMultiplyFn = (a, b) => {
    return a * b;
  };

  function higherOrderFuntion(callbackFn1, callbackFn2) {
    // do some logic
    const add = callbackFn1(2, 4);
    const multiple = callbackFn2(2, 4);

    console.log("Addition of two num 2,4 ", add);
    console.log("Multiplicaiton of two num 2,4 ", multiple);
  }

  higherOrderFuntion(callbackAddFn, callbackMultiplyFn);
}
//callBackExample();

function callbackHellExample() {
  /**
   * Callback hell : If we have multiple callback function where each level depends on the result obtained from previous level
   * Which forms nesting callbacks, it so deeper, the code becomes difficult to read and maintain
   * Code grows horizantally instead verical, its call Primid of doom
   *
   */

  function output(input) {
    console.log(
      "I am geting input and increasing the count from callback hell",
      input
    );
  }

  function fun1(callback) {
    setTimeout(() => {
      let i = 0;
      callback(i);
      i++;
      setTimeout(() => {
        callback(i);
        i++;
        setTimeout(() => {
          callback(i);
          i++;
          setTimeout(() => {
            callback(i);
            i++;
          });
        });
      }, 1000);
    }, 1000);
  }
  fun1(output);
}
//callbackHellExample();

function promiseExample() {
  /**
   * Promise : Promise is an object which represents the eventual completion or rejection of asynchornious operation
   * Promise takes two arguments resolve, reject based on the business logic or api call it can be resolved and rerun data, if rejects retund the error message
   * Promise have three states, pending, fulfilled, rejected
   * p.then(data).catch(err)
   * This helps avoid the callback hell,
   *
   *
   *
   *
   */

  const p1 = new Promise((resolve, reject) => {
    const promiseFlag = true;
    setTimeout(() => {
      if (promiseFlag) {
        resolve("Promise Example: resolved");
      } else {
        reject("Promise Example: rejected");
      }
    }, 1000);
  });

  p1.then((data) => console.log(data)).catch((err) => console.log(err));

  /**
   *
   * Scanario to convert callback hell to promise chain of above hell
   *
   * Js wont wait until resolve the promise will execute immediately
   *
   * https://api.github.com/users/senthikumar
   */

  const pr1 = function (count) {
    return new Promise((resolve, reject) => {
      const promiseFlag = true;
      setTimeout(() => {
        if (promiseFlag) {
          count++;
          console.log(
            "I am geting input and increasing the count promise chain",
            count
          );
          resolve(count);
        } else {
          reject("Promise Example: rejected");
        }
      }, 1000);
    });
  };

  pr1(0)
    .then((data) => {
      pr1(data);
    })
    .then((data) => {
      pr1(data);
    })
    .then((data) => {
      pr1(data);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("I am not waiting for all promise to complete");

  /**
   *
   * Live scanario example convert callback to promise
   *
   * function getInterstMoney (money, callback) {
   *
   *    if(typeof money !=number){
   *      return callback('money is not number');
   *    }else {
   *      return callback(money)
   *    }
   * }
   *
   * function addIntrest (money){
   *  var intrest = 100;
   *    if(money) {
   *      retrun money+intrest
   *    }else{
   *      return money
   *    }
   * }
   *
   *
   * const money = getIntrestMoney(1200,addIntrest)
   *
   *
   */

  const getIntrestMoney = (money) => {
    return new Promise((resolve, reject) => {
      const interst = 100;
      if (typeof money !== "number") {
        reject("Money is not a number");
      } else {
        resolve(money + interst);
      }
    });
  };

  getIntrestMoney(1200).then((money) => console.log(money));
}

//promiseExample();

function promiseStaticMethodExample() {
  /**
   * Promise static methods
   * 1. Promise.all([p1,p2,p3]) :
   *      Takes iterable of promises as an input and returns single Promise that resolves to an array of the result
   *      Returned promise will resolve when all of the input's promises have resolved
   *      It rejects immediately if any one of the promises reject or the non-promises throw an error and will reject first rejection message / error
   *
   *      wait for all promises to success if any one of them reject right after immediately return the failed promises
   *
   * 2. Promise.allsSettled([p1,p2,p3])
   *      Waits for all promises to complete regardles wheather promises are reject or complete
   *
   * 3. Promise.race([p1,p2,p3])
   *      Wait for first sucees/reject of the promise and returns that (Returns a promise that fullfills or rejects as soons as on of the input promises fullfill or rejects with the value or reason from promise)
   *
   * 4. Pomise.any ([p1,p2,p3])
   *      Waits for at least one success of promise (wait for success) and returns that promise of settled value, if all rejected then retruns all rejected as on array
   */

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved from Promise One after 2 sec");
    }, 4000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved from Promise Two after 2 sec");
    }, 5000);
  });

  const p3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I am resolved inside async function p3");
      }, 10000);
    });
  };

  Promise.all([p1, p2, p3]).then((values) => {
    console.log("All", values);
  });

  Promise.allSettled([p1, p2, p3]).then((values) => {
    console.log("AllSettled", values);
  });
}
//promiseStaticMethodExample();

function asyncFunExample() {
  /**
   * Async function is to handle promises, await key word used inside async function only
   * Async function Which  returns the promise
   * Async & await helps run the asynchornious operation loke synchronus way, which means untill asychornous operation completes the calstack suspend from the execution for that particular line of code
   * It allows you to write asynchronous code that looks like synchronous code, making it easier to understand.
   *
   */
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved from Promise One after 2 sec");
    }, 4000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved from Promise Two after 2 sec");
    }, 5000);
  });

  const p3 = () => {
    setTimeout(() => {
      console.log("I am resolved inside async function");
    }, 10000);
  };

  async function getData() {
    let obj = {};
    //return p1; // use case one

    const result1 = await p1; // use case 2
    console.log("Result 1 --> p1 is reolved");

    const result2 = await p2;
    console.log("Result 2 --> p2 is reolved");

    const result3 = await p3;
    console.log("Result 3 --> p3 is reolved");
  }

  const getDataPromise = getData();
  console.log("console getData function:", getDataPromise); // returns promise object instead string , to get the value use .then
  //getDataPromise.then((result) => console.log(result));

  /**
   * 
   * Call back hell to Async await example
   * 
   *
   * getData( function(a){
      getMoreData(a, function(b){
        getMoreData (b, function(c){
          getmoreData(c, function(d){
            
          })
        })
      })
   })

   const a = await getData();
   const b = await getMoreData(b)
   const c = await getMoreData(c)
   const d = await getMoreData(d)

   * 
   */
}

//asyncFunExample();

const globalThis = this;
const thisKeyWordExample = () => {
  // this concept in globalspace -> refers to window if browser
  /**
   * In most case, the value of 'this' is determined by how the function is called (run time binding)
   */
  console.log("Global This", globalThis);
  // this inside a function

  //  this inside object's method

  // call, apply, bind
  // this inside arrow function
  // this inside DOM
};

/**
 * @param {number[]} nums [2,7,11,15] - 9
 * @param {number} target
 * @return {number[]}
 */
var nums = [2, 7];
var target = 9;
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[i] + nums[j] == target) {
        return [nums.indexOf(nums[i]), nums.indexOf(nums[j])];
      }
    }
  }
};

var optimalTwoSum = function (nums, target) {
  const storageObj = {};
  for (index = 0; index < nums.length; index++) {
    // neededNumber = target - num; ( x+y = target )
    const num = nums[index];
    const neededNumber = target - num;
    if (storageObj[neededNumber] !== undefined) {
      if (nums.length < 3 && target == nums[0] + nums[1]) {
        return [storageObj[neededNumber], 1];
      }
      return [storageObj[neededNumber], nums.indexOf(num)];
    }
    storageObj[num] = index;
  }
};

//const indices = twoSum(nums, target);
const indices1 = optimalTwoSum(nums, target);
//console.log(indices1);

function callApplyBind() {
  /**
   *
   * All 3 methods are calling the function w.r.t object context (this)
   *
   * Call - Call the function and passing object context, passing arguments as comma separated
   * Apply - Same as call method like call the function and passing object context however difference in passing arguments [arg1, arg2, arg3...]
   * Bind - bind the function to the object and call later as needed and argument can pass as comma separated
   *
   */

  function printNameAndAdress(area, city) {
    console.log(
      this.firstname,
      "",
      this.lastname,
      ",",
      area,
      ",",
      city ? city : ""
    );
  }

  const person = {
    firstname: "Senthil",
    lastname: "Kumar",
  };

  printNameAndAdress.call(person, "Ariyalur"); // Call Method

  const person1 = {
    firstname: "Raji",
    lastname: "Kumar",
  };

  printNameAndAdress.call(person1, "Ariyalur", "Trichy"); // Call Method

  printNameAndAdress.apply(person1, ["Trichy", "Chennai"]); // apply method

  // Bind
  const person2 = {
    firstname: "Raja",
    lastname: "Kanna",
  };
  const printNameAdd = printNameAndAdress.bind(person2, "Chennai", "Tamilnadu");
  printNameAdd();
}

//callApplyBind();

function polyfillBind() {
  const name = {
    name: "Senthilkumar",
  };
  function printMyname() {
    console.log(this.name);
  }

  // normal  bind method and can pass any other arguments as comma separated
  const showMyName = printMyname.bind(name);
  showMyName();
  // Lets try with polyfill
  function printMynamePolyfil(area, town, country) {
    console.log(this.name, " ", area, " ", town, " ", country);
  }
  Function.prototype.myBind = function (...args) {
    const thisObj = this; //  function to be call
    const params = args.slice(1);
    return function (...args1) {
      //thisObj.call(); // call this function and pass object, as we know call method will have function and arguments ..arg[0] will be the function
      thisObj.apply(args[0], [...params, ...args1]);
    };
  };

  // .bind(obj, arg1, arg2)
  const showMyNamePolyfill = printMynamePolyfil.myBind(
    name,
    "Ariyalur",
    "Tamilnadu",
    "India"
  );
  showMyNamePolyfill();
}

//polyfillBind();

function protoTypalInheritance() {
  /**
   * Whenever we create a new variables or object by default it inherits the properties and methods of its associated object type
   *
   * Example creating const arr = [1,2,3]
   *
   * arr inherits the property and methods of Array, and Again Array inherits of Object this is called prototypalInheritance
   *
   * arr.__proto__ // all Array properties and methods (length, map, filter, push, pop, etc)
   *
   * arr.__proto__.__proto__ // all object properties and methods (this is the reason we say everything in JS is object) (hasOwnproperty, entries, etc..)
   *
   * arr.__proto__.__proto__.__proto__ // null
   *
   */

  const arr = [1, 2, 3];

  const obj = {
    firstname: "Senthil",
    lastname: "Kumar",
    city: "Ariyalur",

    callme: function () {
      console.log(this.firstname, this.lastname, " from ", this.city);
    },
  };

  const obj2 = {
    firstname: "Siva",
  };

  obj2.__proto__ = obj;

  __this.obj2 = obj2; // attaching to window as we wrapped inside function, obj2 in console can be access obj of callme, lastename
}

//protoTypalInheritance();

function objectComparision() {
  // primitive data types are compared by value.
  let c = 1;
  let d = 1;
  let c1 = c;
  console.log(c === c1);

  //non-primitive data types are compared by reference.

  let a = { name: "Dionysia", age: 29 };
  let b = { name: "Dionysia", age: 29 };

  let m = a; // refering instance

  console.log("a === b", a === b);
  console.log("a == b", a == b);
  console.log("m == a", m === a);

  const Person = {
    name: "Senthil",
    area: "Ariyalur",
    print: function () {
      console.log(this.name);
    },
  };

  //falsy Values

  const falsy = [0, -0, " ", null, undefined, false, " ", [], {}];

  /**
   * true + false             // 1
   * 12 / "6"                 // 2
   * "number" + 15 + 3        // 'number153'
   * 15 + 3 + "number"        // '18number'
   * [1] > null               // true
   * "foo" + + "bar"          // 'fooNaN'
   * 'true' == true           // false
   * false == 'false'         // false
   * null == ''               // false
   * !!"false" == !!"true"    // true
   * ['x'] == 'x'             // true
   * [] + null + 1            // 'null1'
   * [1,2,3] == [1,2,3]       // false
   * {}+[]+{}+[1]             // '0[object Object]1'
   * !+[]+[]+![]              // 'truefalse'
   * new Date(0) - 0          // 0
   * new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
   *
   *
   *
   */
}

objectComparision();
