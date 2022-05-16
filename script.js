//Define render-function to avoid global variables
function renderPasswordCheck() {
  //Store both input-elements in objects
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");
  //Store all check-text-elements together in an object
  const allChecks = document.querySelectorAll("p");
  //Store single check-text-elements in objects
  const equalityCheck = document.querySelector("#equality-check");
  const lowerCaseCheck = document.querySelector("#lower-case-check");
  const upperCaseCheck = document.querySelector("#upper-case-check");
  const containsNumbersCheck = document.querySelector(
    "#contains-numbers-check"
  );
  const minimumLengthCheck = document.querySelector("#minimum-length-check");
  //Add events for both input-elements
  //"input"-event represents a change of the input
  //Password-check only runs, if passwords are equal
  //Else "check-no"-class is added to every single check-element
  secondPassword.addEventListener("input", () => {
    if (firstPassword.value === secondPassword.value) {
      passwordCheck();
    } else {
      for (const check of allChecks) {
        check.classList.remove("check-yes");
        check.classList.add("check-no");
      }
    }
  });

  firstPassword.addEventListener("input", () => {
    if (firstPassword.value === secondPassword.value) {
      passwordCheck();
    } else {
      for (const check of allChecks) {
        check.classList.remove("check-yes");
        check.classList.add("check-no");
      }
    }
  });

  function passwordCheck() {
    //First check: Passwords are equal
    if (firstPassword.value === secondPassword.value) {
      equalityCheck.classList.remove("check-no");
      equalityCheck.classList.add("check-yes");
    } else {
      equalityCheck.classList.remove("check-yes");
      equalityCheck.classList.add("check-no");
    }

    //Second check: Lower case letters
    if (
      firstPassword.value.match(/[a-z]/gm) &&
      secondPassword.value.match(/[a-z]/gm)
    ) {
      lowerCaseCheck.classList.remove("check-no");
      lowerCaseCheck.classList.add("check-yes");
    } else {
      lowerCaseCheck.classList.remove("check-yes");
      lowerCaseCheck.classList.add("check-no");
    }

    //Third check: Upper case letters
    if (
      firstPassword.value.match(/[A-Z]/gm) &&
      secondPassword.value.match(/[A-Z]/gm)
    ) {
      upperCaseCheck.classList.remove("check-no");
      upperCaseCheck.classList.add("check-yes");
    } else {
      upperCaseCheck.classList.remove("check-yes");
      upperCaseCheck.classList.add("check-no");
    }

    //Fourth check: Contains numbers
    if (
      firstPassword.value.match(/[1-9]/gm) &&
      secondPassword.value.match(/[1-9]/gm)
    ) {
      containsNumbersCheck.classList.remove("check-no");
      containsNumbersCheck.classList.add("check-yes");
    } else {
      containsNumbersCheck.classList.remove("check-yes");
      containsNumbersCheck.classList.add("check-no");
    }

    //Fifth check: At least 10 characters long
    if (firstPassword.value.length >= 10 && secondPassword.value.length >= 10) {
      minimumLengthCheck.classList.remove("check-no");
      minimumLengthCheck.classList.add("check-yes");
    } else {
      minimumLengthCheck.classList.remove("check-yes");
      minimumLengthCheck.classList.add("check-no");
    }
  }

  //Toggle button to show and hide passwords
  const switchPWButton = document.querySelector("#switch-pw-visibility");
  switchPWButton.addEventListener("click", () => {
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
}

renderPasswordCheck();
