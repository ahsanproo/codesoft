let inputScreen = document.querySelector("#input-screen");
let btnBox = document.querySelectorAll(".btn-box");
let clearBtn = document.querySelector("#clear-btn");
let equalBtn = document.querySelector("#equal-btn");

btnBox.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText !== "clear") {
      if (inputScreen.value === "0") {
        inputScreen.value = btn.innerText;
      } else {
        inputScreen.value = inputScreen.value + btn.innerText;
      }
    }
  });
});
clearBtn.addEventListener("click", () => {
  if (inputScreen.value.length > 0) {
    inputScreen.value = inputScreen.value.slice(0, -1);
  }
  if (inputScreen.value === "") {
    inputScreen.value = "0";
  }
});

equalBtn.addEventListener("click", () => {
  try {
    let result = eval(inputScreen.value);
    result = Math.round(result * 100) / 100;
    inputScreen.value = result;
  } catch (error) {
    inputScreen.value = "Error";
  }
});
