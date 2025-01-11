const calculationDisplay = document.querySelector("#calculation");
const resultDisplay = document.querySelector("#result");
let result = "";
let calculation = "";
let operator;

function reset() {
	result = "";
	calculation = "";
	calculationDisplay.textContent = "";
	resultDisplay.textContent = "0";
	operator = "";
}

document.addEventListener("onload", reset());

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.className === "number") {
			result += button.textContent;
			resultDisplay.textContent = result;
		} else if (button.id === "clear") {
			reset();
		} else if (button.id === "delete") {
			if (result.length <= 1) {
				reset();
			} else {
				result = result.slice(0, -1);
				resultDisplay.textContent = result;
			}
		} else if (button.className === "operator") {
			calculation = result + button.textContent;
			calculationDisplay.textContent = calculation;
			operator = button.textContent;
			result = "";
		}
	});
});
