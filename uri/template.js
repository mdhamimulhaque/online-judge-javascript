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
  var employeeNum = parseFloat(readline());
  var worksHour = parseFloat(readline());
  var salary = parseFloat(readline());

  var totalSalary = (worksHour * salary).toFixed(2);

  print("NUMBER" + " = " + employeeNum + "\n" + "SALARY" + " = " + "U$ " + totalSalary);
}
