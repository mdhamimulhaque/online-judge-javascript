"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  // your code goes here
  var A = parseFloat(readline());
  var B = parseFloat(readline());
  var C = parseFloat(readline());

  var AA = A * 2;
  var BB = B * 3;
  var CC = C * 5;
  var MEDIA = ((AA + BB + CC) / 10).toFixed(1);

  print("MEDIA" + " = " + MEDIA);
}
