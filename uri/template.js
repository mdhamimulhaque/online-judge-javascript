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
  var product_1 = readline();
  var product_2 = readline();

  const productInfo_1 = product_1.split(" ").map((num) => + num);
  const productInfo_2 = product_2.split(" ").map((num) => + num);

  var quantity_P1 = productInfo_1[1];
  var price_P1 = productInfo_1[2];

  var quantity_P2 = productInfo_2[1];
  var price_P2 = productInfo_2[2];

  var total = ((quantity_P1 * price_P1) + (quantity_P2 * price_P2)).toFixed(2)

  print("VALOR A PAGAR: " + "R$ " + total)




}
