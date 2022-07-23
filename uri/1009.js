var name = readline();
var fixedSalary = parseFloat(readline());
var overAllSold = parseFloat(readline());


var total = fixedSalary + (overAllSold * 15) / 100;

var totalAmount = total.toFixed(2)

print("TOTAL" + " = " + "R$" + " " + totalAmount)



