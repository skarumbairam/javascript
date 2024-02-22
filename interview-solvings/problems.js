/**
 * Day 1 of 365 Days Coding Challenge - Palindrome or not
 *  Example: If we reverse 'madam' -> 'madam' redivider,is palindrome
 *
 */

function isPalindrome(str) {
  let start = 0; // Start letter
  let end = str.length - 1; // Last letter
  while (start < end) {
    if (str[start] == str[end]) {
      start++;
      end--;
    } else {
      console.log("Given word is not polyndrome");
      return false;
    }
  }
  console.log("Given word is polyndrome");
  return true;
}
isPalindrome("madam");

/**
 * Find First and second largest numner in array
 *
 *
 */

function largetstNumbers() {
  const arr = [2, 1, 10, 30];
  let maxFirst = 0;
  let maxSecond = 0;

  // Array sort wont work for Numeric

  arr.sort(function (a, b) {
    return a - b;
  });

  maxSecond = arr[arr.length - 2];
  maxFirst = arr[arr.length - 1];
  console.log("largetstNumbers Approach 1:", maxFirst, maxSecond);

  // Approach 2

  const arr1 = [2, 1, 10, 30];
  arr1.sort(function (a, b) {
    return a - b;
  });

  console.log("largetstNumbers Approach 2:", arr1.at(-1), arr1.at(-2));

  // Treditional approach to find largest number fist
  // Compare largest number with array element and get second largest number

  let max = 0;
  let max2 = 0;

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    for (j = 0; j < arr.length; j++) {
      if (arr[j] < max && arr[j] > max2) {
        max2 = arr[j];
      }
    }
  }

  console.log("max", max, "max2", max2);
}

largetstNumbers();

/**
 * Rotate Array
 *
 *
 */

function rotateArray() {
  const inputArray = [1, 2, 3, 4, 5, 6];
  const oupArray = [4, 5, 6, 1, 2, 3];

  console.log("Input Array ", inputArray);

  // Approach 1 forward

  function rotateApproachOne(inputArray, kTimes) {
    for (i = 0; i < kTimes; i++) {
      inputArray.unshift(inputArray.pop());
    }
    console.log("Approach 1 :", inputArray);
  }
  rotateApproachOne(inputArray, 4);

  // Approach 2 Reverse
  const inputArray1 = [1, 2, 3, 4, 5, 6];
  function rotateApproachTwo(inputArray, kTimes) {
    for (i = 0; i < kTimes; i++) {
      inputArray.push(inputArray.shift());
    }
    console.log("Approach 2 :", inputArray);
  }
  rotateApproachTwo(inputArray1, 2);

  // Approach 3 slice and concat

  const inputArr2 = [1, 2, 3, 4, 5, 6];

  function rotateApproachThree(inputArray, kTimes) {
    const newArray = inputArray
      .slice(kTimes)
      .concat(inputArray.slice(0, kTimes));
    console.log("Approach 3 :", newArray);
  }

  rotateApproachThree(inputArr2, 2);

  // Treditional Approach  const inputArr2 = [1, 3, 5, 7, 9]; kTimes = 4

  const inputArr3 = [2, 4, 6, 8, 10];
  const k = 2;
  const n = inputArr3.length;
  const rotateArray = [];

  //console.log(inputArr3[n - 1 - i]);
  for (i = 0; i < n; i++) {
    // Right Rotation
    /* if (i < k) {
      rotateArray[i] = inputArr3[n + i - k];
    } else {
      rotateArray[i] = inputArr3[i - k];
    }*/

    // Left Rotation
    if (i < k) {
      rotateArray[n + i - k] = inputArr3[i];
    } else {
      rotateArray[i - k] = inputArr3[i];
    }
  }

  console.log("Approach 4 :", rotateArray);
}

rotateArray();
