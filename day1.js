//1multiply by 50
function multiplyBy50(number) {
  var result = number * 50;
  console.log(result);
}
var num = 2;
multiplyBy50(num);

//2multiply each element
function productOfSix(one, two, three, four, five, six) {
  let result = one * two * three * four * five * six;
  console.log(result);
}
productOfSix(1, 2, 3, 4, 5, 6);

//3 sum of fieve
function AddSumOfFive(one, two, three, four, five) {
  const sum = one + two + three + four + five;
  console.log("sum", sum);
}
AddSumOfFive(1, 2, 3, 4, 5);

4; //cube
function cubeFun(N) {
  const cube = N * N * N;
  console.log(cube);
}
cubeFun(10, 10, 10);

//find squre of three values and find the sum of three squre values
function sumOfSquares(one, two, three) {
  // Calculate the squares of the three values
  const squareOne = one * one;
  const squareTwo = two * two;
  const squareThree = three * three;
  console.table([squareOne, squareTwo, squareThree]);

  const sum = squareOne + squareTwo + squareThree;
  console.log(sum);
}

const result = sumOfSquares(3, 4, 5);
console.log("The sum of the squares is:", result);

// values of x is 3. after mul it should be 9 and adding 10 it should
//be 19
function findX(X) {
  const Xvalues = X * 3;
  const addedValue = Xvalues + 10;
  console.log("xValues", Xvalues); //9
  console.log("addedValue", addedValue); //19
}

findX(3);

//if num1>num2 print true else print false
//after this if num3+num 1is greater than  num2 print true else print false

function IFElse(num1, num2, num3) {
  if (num1 > num2) {
    console.log("true", true);
  } else {
    console.log("false", false);
  }
  if (num1 + num2 > num2) {
    console.log("true", true);
  } else {
    console.log(false);
  }
}

IFElse(3, 2, 3);

/*1. num1 &gt; num2 -&gt; this operation prints true, if num1 is greater than num2, otherwise it prints false
2. num1 &lt; num2 -&gt; this operations prints true, if num1 is smaller than num2, otherwise it prints false
3. num1 == num2 -&gt; this operation print true, if num1 is equal to num2, otherwise it prints false
 */
function IfElse1(num1, num2) {
  if (num1 > num2) {
    console.log(true);
  } else {
    console.log(false);
  }
  if (num1 < num2) {
    console.log(true);
  } else {
    console.log(false);
  }
  if (num1 === num2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
IfElse1(2, 5);

/* */
function IfElse2(one, two, three, four, five) {
  let sum1 = one + two + three;
  let sum2 = four + five;
  if (one > sum2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
(values = 5), 5;
IfElse2(values);

/* */
function compareSevenNumbers(a, b, c, d, e, f, g) {
  let sum1 = (a + b) * c;
  let sum2 = d + e + f + g;

  console.log(sum1);
  console.log(sum2);

  if (sum1 > sum2) {
    console.log(false);
  } else {
    console.log(true);
  }
}

compareSevenNumbers(1, 2, 3, 4, 5, 6, 7);

/*print true if cube of n is greater than square of m
 else false
*/
function cubeAndSquare(n, m) {
  //write code here
  let square = m * m;
  let cube = n * n * n;

  if (cube > square) {
    console.log("true", true);
  } else {
    console.log("false", false);
  }
}
cubeAndSquare(2, 3);

///
function findK(m) {
  let mul = m * 7;
  let added = mul + 10;
  let divided = Math.floor(added / 2);

  console.log("mulvalue", mul);
  console.log("added", added);
  console.log("divid", divided);
}
let val1 = 10;
let val2 = 11;

findK(val2);

//
function LogicalAnd(a, b) {
  //write yur code here
  if (a >= 15 && b < 25) {
    console.log("true", true);
  } else {
    console.log("false", false);
  }
}

LogicalAnd(2, 3);

//
function worldCupFinal(
  NzScore,
  NzSuperOver,
  NzFours,
  EngScore,
  EngSuperOver,
  EngFours
) {
  //Write code here

  if (NzScore > EngScore) {
    console.log("New Zealand");
  } else if (NzScore < EngScore) {
    console.log("England");
  } else if (NzSuperOver > EngSuperOver) {
    console.log("New Zealand");
  } else if (NzSuperOver < EngSuperOver) {
    console.log("England");
  } else if (NzFours > EngFours) {
    console.log("New Zealand");
  } else if (NzFours < EngFours) {
    console.log("England");
  }
}
