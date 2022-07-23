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
  var name = readline();
  var fixedSalary = parseFloat(readline());
  var overAllSold = parseFloat(readline());


  var total = fixedSalary + (overAllSold * 15) / 100;

  var totalAmount = total.toFixed(2)

  print("TOTAL" + " = " + "R$" + " " + totalAmount)




}
