const calculationDisplay = document.querySelector("#calculation");
const resultDisplay = document.querySelector("#result");
let a = "0";
let b = "";
let operator = "";
let usedDecimal = false;
let pressedEqual = false;

// Function that resets everything on the webpage to 0
function reset() {
	a = "0";
	b = "";
	operator = "";
	usedDecimal = false;
	resultDisplay.textContent = "0";
	calculationDisplay.textContent = "0";
	console.log({ a });
	console.log({ b });
	console.log({ operator });
}

document.addEventListener("onload", reset());

// Function that returns answer by operating on the two operands
function operate(a, b, operator) {
	let answer;
	if (operator === "+") {
		answer = Number(a) + Number(b);
	} else if (operator === "-") {
		answer = Number(a) - Number(b);
	} else if (operator === "*") {
		answer = Number(a) * Number(b);
	} else {
		answer = Number(a) / Number(b);
	}

	return Math.round(answer * 100) / 100;
}

function getNumberFromId(numberButton) {
	let value = numberButton.id;
	switch (value) {
		case "one-button":
			return "1";
		case "two-button":
			return "2";
		case "three-button":
			return "3";
		case "four-button":
			return "4";
		case "five-button":
			return "5";
		case "six-button":
			return "6";
		case "seven-button":
			return "7";
		case "eight-button":
			return "8";
		case "nine-button":
			return "9";
		case "zero-button":
			return "0";
		case "decimal-button":
			return ".";
	}
}

// This part of code reads numbers and stores them in variables (a or b)
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
	numberButton.addEventListener("click", () => {
		let temp = getNumberFromId(numberButton);
		console.log({ temp });

		if (pressedEqual) {
			reset();
			pressedEqual = false;
		}

		// Check to ensure that decimal is used once for a or b
		if (temp === "." && usedDecimal === false) {
			usedDecimal = true;
		} else if (temp === "." && usedDecimal === true) {
			return;
		}

		// Check to ensure either a or b is updated depending on operator is present or not
		if (operator === "") {
			if (a === "0") {
				a = temp;
			} else {
				a += temp;
			}
			resultDisplay.textContent = a;
		} else {
			b += temp;
			resultDisplay.textContent = b;
		}

		console.log({ a });
		console.log({ operator });
	});
});

// Does the same thing as above but with keyboard
document.addEventListener("keydown", (event) => {
	if ((event.key >= "0" && event.key <= "9") || event.key === ".") {
		let temp = event.key;

		if (pressedEqual) {
			reset();
			pressedEqual = false;
		}

		// Check to ensure that decimal is used once for a or b
		if (temp === "." && usedDecimal === false) {
			usedDecimal = true;
		} else if (temp === "." && usedDecimal === true) {
			return;
		}

		// Check to ensure either a or b is updated depending on operator is present or not
		if (operator === "") {
			if (a === "0") {
				a = temp;
			} else {
				a += temp;
			}
			resultDisplay.textContent = a;
		} else {
			b += temp;
			resultDisplay.textContent = b;
		}

		console.log({ a });
		console.log({ operator });
	}
});

// Reads operator and stores in variable
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
	operatorButton.addEventListener("click", () => {
		// If operator was not inputed then update operator otherwise do nothing
		if (operator != "") {
			let ans = operate(a, b, operator);
			resultDisplay.textContent = ans;
			calculationDisplay.textContent = a + operator + b;
			a = ans;
			b = "";
			usedDecimal = false;
		}
		operator = operatorButton.textContent;
		// This is to ensure next number can use decimal
		if (usedDecimal === true) {
			usedDecimal = false;
		}
		console.log({ operator });
	});
});

// Resets the calculator
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", reset);

// Deletes the last number
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
	if (a.length <= 1) {
		a = "0";
		resultDisplay.textContent = a;
	} else {
		a = String(a).slice(0, -1);
		resultDisplay.textContent = a;
	}
});

// Equal button, does the math and displays the answer
const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener("click", () => {
	if (a != "" && b != "") {
		let ans = operate(a, b, operator);
		if (ans === Infinity) {
			resultDisplay.textContent = "bruh";
			calculationDisplay.textContent = "(≖_≖)";
			a = "";
			b = "";
		} else {
			resultDisplay.textContent = ans;
			calculationDisplay.textContent = a + operator + b;
			a = ans;
			b = "";
		}
		usedDecimal = false;
		pressedEqual = true;
	} else {
		return;
	}
});
