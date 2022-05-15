const firstPassword = document.querySelector("#first-password");
const secondPassword = document.querySelector("#second-password");
secondPassword.addEventListener("keyup", passwordCheck);
firstPassword.addEventListener("keyup", passwordCheck);

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
  //Store both input-elements in objects
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");

  //First check: Passwords are euqal
  const equalityCheck = document.querySelector("#equality-check");
  if (firstPassword.value === secondPassword.value) {
    equalityCheck.innerHTML = "Passwords are equal ✅";
    //Second check: Lower case letters
    const lowerCaseCheck = document.querySelector("#lower-case-check");
    if (
      firstPassword.value.match(/[a-z]/gm) &&
      secondPassword.value.match(/[a-z]/gm)
    ) {
      lowerCaseCheck.innerHTML = "Lower Case Letters ✅";
    } else {
      lowerCaseCheck.innerHTML = "Lower Case Letters ❌";
    }
    //Third check: Upper case letters
    const upperCaseCheck = document.querySelector("#upper-case-check");
    if (
      firstPassword.value.match(/[A-Z]/gm) &&
      secondPassword.value.match(/[A-Z]/gm)
    ) {
      upperCaseCheck.innerHTML = "Upper Case Letters ✅";
    } else {
      upperCaseCheck.innerHTML = "Upper Case Letters ❌";
    }
    //Fourth check: Contains numbers
    const containsNumbersCheck = document.querySelector(
      "#contains-numbers-check"
    );
    if (
      firstPassword.value.match(/[1-9]/gm) &&
      secondPassword.value.match(/[1-9]/gm)
    ) {
      containsNumbersCheck.innerHTML = "Contains Numbers ✅";
    } else {
      containsNumbersCheck.innerHTML = "Contains Numbers ❌";
    }

    //Fifth check: At least 10 characters long
    const minimumLengthCheck = document.querySelector("#minimum-length-check");
    if (firstPassword.value.length > 10 && secondPassword.value.length > 10) {
      minimumLengthCheck.innerHTML = "At least 10 characters long ✅";
    } else {
      minimumLengthCheck.innerHTML = "At least 10 characters long ❌";
    }
  } else {
    equalityCheck.innerHTML = "Passwords are equal ❌";
  }
}
