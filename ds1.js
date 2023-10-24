//method 1
/*

const reverseArr = () => {
  const oldArr = [12, 13, 14];
  const newArr = oldArr.reverse();
  console.log(newArr);
};
reverseArr();
*/

//method2
/*
function reverseArray(a) {
  const reversedArray = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversedArray.push(a[i]);
  }
  return reversedArray;
}

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray);
*/

///reverse it [2,4,5,6,7,8,9]
//without reverse**************

// function reverseArrValues(a) {
//   const reverseArray = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     reverseArray.push(a[i]);
//   }
//   return reverseArray;
// }

// const inputArray = [2, 4, 5];
// const res = reverseArrValues(inputArray);
// console.log(res);

// **************

//using for loop print each element first letter

// const firstLetter = ["abc", "cdc", "mgc"];
// for (let i = 0; i < firstLetter.length; i++) {
//   console.log(firstLetter[i][1]);
// }
// return firstLetter;

//i have two array  there is some common filed filterout from two array and print them without filter

// function filterArr(arr1, arr2) {
//   const emptyArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         emptyArr.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return emptyArr;
// }
// const values1 = [1, 2, 3, 4, 5];
// const values2 = [1, 3, 4, 5, 2];

// const res = filterArr(values1, values2);
// console.log(res);

// let arr = [
//   9999991567, 23456, 334567, 423456, 8234569, -82345600, 899, -799999999999,
//   2340000000, -8654, 1234455, -1234454,
// ];
// //find highest number
// // let high = [0];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > high) {
// //     high = arr[i];
// //   }
// // }
// // console.log(high);

// //find smallest number

// // let smallest = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] < smallest) {
// //     console.log(arr[i], smallest);
// //     smallest = arr[i];
// //   }
// // }

// // console.log("The smallest : " + smallest);

// //l
// function mapping() {
//   let obj = {
//     name: "name",
//     email: "email@gmail.com",
//   };
//   let newobg = { ...obj, book: "book" };
//   const fresult = newobg;
//   console.log("fres", fresult);

//   let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1000, +100, -500];

//   let emptyValues = [0];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > emptyValues) emptyValues = arr1[i];
//   }
//   console.log("emptyValues", emptyValues);

//   let emptyValues2 = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < emptyValues2) {
//       emptyValues2 = arr2[i];
//     }
//   }
//   const resultEmpty = emptyValues2;
//   console.log(resultEmpty);
// }
// mapping();

//
// function fromAtoB(max, min) {
//   for (let i = min; i < max; i++) {
//     //console.log(i);
//   }
// }
// fromAtoB(11, 12);

// function multiplyBy3(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i * num);
//   }
// }
// multiplyBy3(3);

/*
//Print all the odd numbers lesser than or equal to the value stored in num
Only those numbers need to be printed which are greater than zero
 */

// function oddFun(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0 && i > 0) {
//       console.log("odd", i);
//     }
//   }
// }
// let res1 = 13;
// console.log(oddFun(res1));

//even

// function evenFun(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0 && i > 0) {
//       console.log("odd", i);
//     }
//   }
// }
// let res2 = 13;
// console.log(evenFun(res2));

//print sum from 1to 5 number using for loop

// function fun(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let n = 5;
// const re4 = fun(n);

// console.log(re4);

//   print from 1 to 10 and divide it by3

// function divisibleByThree(left, right, k) {
//   let count = 0;
//   for (let index = left; index <= right; index++) {
//     console.log("index", index);
//     if (index % k === 0) {
//       count++;
//       console.log("count divisiab;e by 3=>>>>>>", count);
//     }
//   }
//   console.log("count divisiab;e by 3", count);
// }

// divisibleByThree(1, 10, 3);

//  given three int
//print sum of k mul of N
//on cond it should be divisible by y

function sumOfMultiples(X, K, Y) {
  let sum = 0;
  let count = 0;

  for (let i = 1; count < K; i++) {
    const multiple = X * i;
    if (multiple % Y === 0) {
      sum += multiple;
      count++;
    }
  }

  return sum;
}

// Example usage:
const X = 3;
const K = 10;
const Y = 5;
const result = sumOfMultiples(X, K, Y);
console.log("result", result); // Output 45
