const firstPassword = document.querySelector("#first-password");
console.log(typeof firstPassword);
const firstPasswordValue = firstPassword.value;
console.log(firstPasswordValue);
const secondPassword = document.querySelector("#second-password");

//Toggle button to show and hide passwords
const switchPWButton = document.querySelector("#switch-pw-visibility");
switchPWButton.addEventListener("click", () => {
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");

  if (firstPassword.type && secondPassword.type === "password") {
    firstPassword.type = "text";
    secondPassword.type = "text";
    switchPWButton.innerText = "Hide Passwords";
  } else if (firstPassword.type && secondPassword.type === "text") {
    firstPassword.type = "password";
    secondPassword.type = "password";
    switchPWButton.innerText = "Show Passwords";
  }
});

function passwordCheck() {
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");

  //First check: Passwords are euqal
  if (firstPassword.value === secondPassword.value) {
    console.log("Passwords are equal");
  } else {
    console.log("Passwords are not equal");
  }

  //Second check: Lower case letters
  if (firstPassword.value.match(/[a-z]/gm)) {
    console.log("Lower Case Letters");
  } else {
    console.log("No lower case letters");
  }

  //Third check: Upper case letters
  if (firstPassword.value.match(/[A-Z]/gm)) {
    console.log("Upper Case Letters");
  } else {
    console.log("No upper case letters");
  }

  //Fourth check: Contains numbers
  if (firstPassword.value.match(/[1-9]/gm)) {
    console.log("Contains numbers");
  } else {
    console.log("Couldn't find any numbers");
  }

  //Fifth check: At least 10 characters long
  if (firstPassword.value.lenght > 10) {
    console.log("At least 10 characters long");
  } else {
    console.log("Please inserts at least 10 characters");
  }
}
