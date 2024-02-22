/**
 *
 * 1. Write a JavaScript program to display the current day and time in the following format.
 * Sample Output : Today is : Saturday
 * Tuesday.Current time is : 10 PM : 30 : 38
 */

const _thisObj = this;

function displayDateTime() {
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const day = new Date().getDay();

  let hour = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();

  const currMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let prepeds = hour > 12 ? "PM" : "AM";
  let timeFormat = hour > 12 ? hour - 12 : hour;
  if (hour == 0) {
    prepeds = "AM";
  }

  console.log("Today is :", currDay[day]);
  console.log(currMonth[month], date);
  console.log("Time is :", timeFormat, prepeds, ":", mins, ":", secs);
}

//displayDateTime();

/**
 *
 * Call, Apply & Bind
 */
const param1 = "Ariyalur";
const param2 = "Keelpaluvur";

const objCall = {
  firstname: "Senthil",
  lastname: "Kumar",
};
const objApply = {
  firstname: "Aadhiran",
  lastname: "S",
};
const objBind = {
  firstname: "Dharani",
  lastname: "s",
};

function callApplyBind() {
  function callFn(param1, param2) {
    console.log(this.firstname, " ", this.lastname);
    console.log(param1, param2);
    console.log("===================");
  }

  callFn.call(objCall, "Keelapaluvur", "Ariyalur");
  callFn.apply(objApply, ["Ariyalur", "Chennai"]); // Need to pass Arguments as []

  const bindMe = callFn.bind(objBind, "Chennai", "Tamilnadu");
  bindMe();

  // Polyfill create own bind

  function printName(param1, param2, param3, param4, param5) {
    console.log(this.firstname, " ", this.lastname);
    console.log(param1, param2, param3, param4, param5);
  }

  Function.prototype.myBind = function (...parentArgs) {
    const _thisObj = this;
    const refObj = parentArgs.shift();
    return function (...args) {
      _thisObj.apply(refObj, [...parentArgs, ...args]);
    };
  };

  const printMyName = printName.myBind(
    objCall,
    "Ariyalur",
    "Trichy",
    "Chennai"
  );
  printMyName("India", "Asia");

  // Curryig using Bind and closure

  function multiply(a, b) {
    console.log(a * b);
  }

  function add(a, b) {
    return function (b) {
      console.log(a + b);
    };
  }

  // multiply.bind(this, 2)(10)
  const multiplyNumber = multiply.bind(this, 2);
  multiplyNumber(3);

  add(10)(15);
}

//callApplyBind();

/**
 *
 * Debouncing Technique is used for website performaance avoiding multiple rtequest
 *
 */

function deBouncing() {
  var couter = 0;
  function getData() {
    console.log("You are hitting API request", couter++);
  }

  function optimizeAPICall() {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(getData, 300);
    };
  }

  // we returning 149 function to get count value also
  return optimizeAPICall();
}

const debounce = deBouncing(); // debounce will execute on keyup

/**
 *
 * Throttling Technique is used for website performaance avoiding multiple rtequest like button clicks, rezise
 *
 */

function optimizeAPICall() {
  let flag = false;
  return function () {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        // callback();
        console.log("Making API Call After 1 sec");
        flag = false;
      }, 200);
    }
  };
}

const throttling = optimizeAPICall();

/**
 *
 * Event Capturing/Trickling and Bubbling
 *
 * By default when we click child element event propagates,  bubble out from bottom to top is called bubbling
 *
 * Set us true, event will traverse top to bottom is called event trickling or capturing
 */

function eventCaptureBubble() {
  function grandParent() {
    console.log("clicked Grand Parent");
  }
  function parent() {
    console.log("clicked  Parent");
  }
  function child() {
    console.log("clicked Child");
  }

  document.getElementById("grandParant").addEventListener("click", grandParent);
  document.getElementById("parent").addEventListener("click", parent);
  document.getElementById("child").addEventListener("click", child);
}

//eventCaptureBubble();

/**
 *
 * Event Delegation
 * Attaching single event to multiple elements, instead attaching each element
 * Less code
 *
 */

function eventDelegation() {
  document
    .querySelector("#eventDeleagation")
    .addEventListener("click", callback);

  function callback(e) {
    console.log(e);
    console.log(e.target.innerText);
  }

  document.querySelector("#form").addEventListener("keyup", (e) => {
    if (e.target.dataset.uppercase !== undefined) {
      let value = e.target.value;
      e.target.value = value.toUpperCase();
    }
  });
}

//eventDelegation();

/**
 *
 * Recursive of sum up to n numbers
 *
 * sum(10)(5)(4)(3)...(n)
 */
function curryingRecursive() {
  const sum = function (a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  };

  const sum1 = function (a) {
    return function (b) {
      return b ? sum1(a + b) : a;
    };
  };

  console.log(sum1(10)(10)(5)());
  console.log(sum(10)(10)(5));
}

//curryingRecursive();

/**
 *
 * Object recurrsive
 *
 * const user = {}
 */

function objectRecurssive() {
  //user_name: senthilkumarr, user_name_details_family_wife:Hema,

  const resultObj = {};
  const user = {
    name: "Senthilkumar",
    details: {
      family: {
        wife: "Hema",
        son: "Havish",
        daughter: "Dharani",
      },
      office: {
        company: "PayPal",
        city: "Bangalore",
      },
    },
  };

  function callObj(obj, parent) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        callObj(obj[key], `${parent}_${key}`);
      } else {
        resultObj[`${parent}_${obj[key]}`] = obj[key];
      }
    }
  }

  callObj(user, "user");
  console.log(resultObj);
}

//objectRecurssive();

/**
 *
 * implement Array map, filter, reduce
 *
 */

function implementArrayMapFilterReduce() {
  // map [1,4,6,2]

  const arr = [1, 3, 5, 1, 12, 10];
  const double = arr.map((item, index) => {});
  //console.log(double);

  Array.prototype.newMap = function (callback) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
      resultArray[i] = callback(this[i], i);
    }
    return resultArray;
  };

  const tribble = arr.newMap((item, index) => {
    return item * 3;
  });
  console.log(tribble);

  // Filter

  const myFilterArray = arr.filter((item, index) => {
    return item >= 5;
  });
  console.log(myFilterArray);

  Array.prototype.newFilter = function (callback, context) {
    let filterArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        filterArray.push(this[i]);
      }
    }
    return filterArray;
  };

  const newFillterArray = arr.newFilter((item, index) => {
    return item <= 5;
  });

  console.log(newFillterArray);

  // Reduce
  const total = arr.reduce((acc, item, index) => {
    return acc + item;
  }, 0);

  console.log("total :", total);

  Array.prototype.newReduce = function (callback, accumulator) {
    let total = accumulator || undefined;

    for (let i = 0; i < this.length; i++) {
      if (total) {
        total = callback.call(total, total, this[i], i, this);
      } else {
        total = this[i];
      }
    }

    return total;
  };

  const total1 = arr.newReduce((acc, item, index) => {
    return acc + item;
  }, 0);

  console.log("total1 :", total1);
}

implementArrayMapFilterReduce();
