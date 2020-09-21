var wrapperEle = document.body.querySelector(".wrapper");
var number1 = 5;
var newvalue = 0
var number1 = Number(prompt("Enter a number"));
if(isNaN(number1)==(prompt("Enter another number"))){
  var number2 = Number(prompt("Enter another number"));
}
else if(newvalue>=10){
  wrapperEle.innerHTML="Enter another number";
}
else if(newvalue<=10){
  wrapperEle.innerHTML="Program is over";
}