// I wrote all my code in my text editor where I could run tests and debug like I do in my regular work flow. When I pasted here to submit, the browser said I was cheating. Just wanted to give a quick explanation.

const createFinalOutputString = (profit, challengeToken) => {
  // prepend profit, replace every third character in string with X
  let tokenString = profit + challengeToken;
  return tokenString.replace(/(..)./g, '$1X');
};

function ArrayChallange(arr) {
  let max_profit = arr[1] - arr[0];
  arr.forEach((num, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max_profit) max_profit = arr[j] - arr[i];
    }
  });
  const profit = max_profit > 0 ? max_profit : -1;
  return createFinalOutputString(profit, 'mdc4fa8i70e');
}

const testArrays = [
  [44, 30, 24, 32, 35, 30, 40, 38, 15],
  [10, 12, 4, 5, 9],
  [14, 20, 4, 12, 5, 11],
  [10, 9, 8, 2],
  [50, 40, 30, 20, 10],
];

const testProfitResults = [16, 5, 8, -1, -1];
const testFinalResults = [
  '16XdcXfaXi7Xe',
  '5mXc4Xa8X70X',
  '8mXc4Xa8X70X',
  '-1XdcXfaXi7Xe',
  '-1XdcXfaXi7Xe',
];

testArrays.forEach((arr, i) =>
  //   console.assert(ArrayChallange(arr) === testProfitResults[i])
  console.assert(ArrayChallange(arr) === testFinalResults[i])
);
