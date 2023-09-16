const labels = document.querySelectorAll(".grid-items");
const inputs = document.querySelectorAll('input[type="radio"]');
const custom = document.querySelector("#Custom");
// console.log(custom);
labels.forEach((label) => {
  label.addEventListener("click", () => {
    labels.forEach((l) => l.classList.remove("selected"));
    label.classList.add("selected");
  });
});
let arrayOfInputs = [];
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    custom.value = "";
    arrayOfInputs.push(input.value);
  });
});

const bill = document.querySelector("#Bill");
const NumOfPeople = document.querySelector("#num-of-people");
const errorMsg = document.querySelector(".error-msg");
const tipAmountPerPerson = document.querySelector("#user_output-tip-display-1");
const totalPerPerson = document.querySelector("#user_output-tip-display-2");
function update() {
  //error indicators
  errorMsg.style.visibility = NumOfPeople.value == 0 ? "visible" : "hidden";
  NumOfPeople.style.outlineColor =
    NumOfPeople.value == 0 ? "red" : "hsl(185, 41%, 84%)";
  //tip calc logic
  if (custom.value !== "") {
    arrayOfInputs.push(custom.value);
  }
  let a =
    (bill.value * parseInt(arrayOfInputs[arrayOfInputs.length - 1])) /
    (100 * NumOfPeople.value);
  let b = bill.value / NumOfPeople.value + a;
  // lil bit of animation
  let tipAmt = 0;
  let totalAmt = 0;
  const animationDuration = 2000; // milliseconds
  const numberOfSteps = Math.floor(animationDuration / 10); // Assuming 10 ms interval

  const tipIncrement = a / numberOfSteps;
  const totalIncrement = b / numberOfSteps;
  let countInterval = setInterval(() => {
    tipAmt += tipIncrement;
    totalAmt += totalIncrement;
    tipAmountPerPerson.innerHTML = "$" + tipAmt.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalAmt.toFixed(2);
    if (tipAmt >= a) {
      clearInterval(countInterval);
    }
  }, 10);
}
const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", () => {
  tipAmountPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
  labels.forEach((l) => l.classList.remove("selected"));
});
