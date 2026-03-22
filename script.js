let buttonpressed = 0;
function buttonClicked() {
  buttonpressed++;
  console.log("Button has been pressed " + buttonpressed + " times.");
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

function myFunction() {
  alert("Hello, World!");
}

//  myFunction();

// function sum() {
//   let num1 = parseInt(prompt("Enter the first number:"));
//   let num2 = parseInt(prompt("Enter the second number:"));
//   let result = num1 + num2;
//   alert("The sum is: " + result);
//   //   alert("The sum is: " + result);
//   console.log(typeof result);
// }
// sum();

function changeHeading() {
  let headings = document.getElementsByTagName("h1");
  for (let i = 0; i < headings.length; i++) {
    let message = prompt("Enter a message to change the heading:");
    headings[i].innerHTML = message;
  }
}
