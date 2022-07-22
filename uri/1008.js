var employeeNum = parseFloat(readline());
var worksHour = parseFloat(readline());
var salary = parseFloat(readline());

var totalSalary = (worksHour * salary).toFixed(2);

print("NUMBER" + " = " + employeeNum + "\n" + "SALARY" + " = " + "U$ " + totalSalary);