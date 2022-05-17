//Define render-function to avoid global variables
function renderPasswordCheck() {
  //Store both input-elements in objects (together and single)
  const bothPasswords = document.querySelector(".input-area");

  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");

  //Store all check-text-elements in objects (together and single)
  const allChecks = document.querySelectorAll(".check-display");

  const equalityCheck = document.querySelector("#equality-check");
  const lowerCaseCheck = document.querySelector("#lower-case-check");
  const upperCaseCheck = document.querySelector("#upper-case-check");
  const containsNumbersCheck = document.querySelector(
    "#contains-numbers-check"
  );
  const minimumLengthCheck = document.querySelector("#minimum-length-check");

  //Add event for both input-elements using their parent element in bubbling phase
  //"input"-event represents a change of the input
  //Password-check only runs, if passwords are equal
  //Else "check-no"-class is added to every single check-element
  bothPasswords.addEventListener("input", runPasswordCheck);

  function runPasswordCheck() {
    const firstPwUserInput = firstPassword.value;
    const secondPwUserInput = secondPassword.value;
    if (firstPwUserInput === secondPwUserInput) {
      passwordCheck(firstPwUserInput === secondPwUserInput, equalityCheck);
      passwordCheck(/[a-z]/gm.test(firstPwUserInput), lowerCaseCheck);
      passwordCheck(/[A-Z]/gm.test(firstPwUserInput), upperCaseCheck);
      passwordCheck(/[1-9]/gm.test(firstPwUserInput), containsNumbersCheck);
      passwordCheck(firstPwUserInput.length >= 10, minimumLengthCheck);
    } else {
      for (const check of allChecks) {
        check.classList.replace("check-yes", "check-no");
      }
    }
  }

  function passwordCheck(checkConditionTrue, checkEl) {
    if (checkConditionTrue) {
      checkEl.classList.replace("check-no", "check-yes");
    } else {
      checkEl.classList.replace("check-yes", "check-no");
    }
  }

  //Toggle button to show and hide passwords
  const switchPWButton = document.querySelector("#switch-pw-visibility");
  switchPWButton.addEventListener("click", () => {
    if (
      firstPassword.type === "password" &&
      secondPassword.type === "password"
    ) {
      firstPassword.type = "text";
      secondPassword.type = "text";
      switchPWButton.innerText = "Hide Passwords";
    } else if (
      firstPassword.type === "text" &&
      secondPassword.type === "text"
    ) {
      firstPassword.type = "password";
      secondPassword.type = "password";
      switchPWButton.innerText = "Show Passwords";
    }
  });
}

renderPasswordCheck();
