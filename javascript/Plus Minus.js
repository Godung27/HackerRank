'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
let a = 0;
let b = 0;
let c = 0;

function plusMinus(arr) {
  // Write your code here
  for (const num of arr) {
    if (num > 0) {
      a++;
    } else if (num < 0) {
      b++;
    } else {
      c++;
    }
  }

  const fix = function (e) {
    return (e / arr.length).toFixed(6);
  }

  console.log(fix(a));
  console.log(fix(b));
  console.log(fix(c));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
