const calculationDisplay = document.querySelector("#calculation");
const resultDisplay = document.querySelector("#result");
let a = "";
let b = "";
let operator = "";
let usedDecimal = false;

function reset() {
	a = "";
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

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
	numberButton.addEventListener("click", () => {
		let temp = numberButton.textContent;
		if (temp === "." && usedDecimal === false) {
			usedDecimal = true;
		} else if (temp === "." && usedDecimal === true) {
			return;
		}
		console.log({ b });
		if (operator === "") {
			a += temp;
			resultDisplay.textContent = a;
		} else {
			b += temp;
			resultDisplay.textContent = b;
		}

		console.log({ a });
		console.log({ operator });
	});
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
	operatorButton.addEventListener("click", () => {
		if (operator != "") {
			let ans = operate(a, b, operator);
			resultDisplay.textContent = ans;
			calculationDisplay.textContent = a + operator + b;
			a = ans;
			b = "";
			usedDecimal = false;
		}
		operator = operatorButton.textContent;
		if (usedDecimal === true) {
			usedDecimal = false;
		}
		console.log({ operator });
	});
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", reset);

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

const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener("click", () => {
	if (a != "" && b != "") {
		let ans = operate(a, b, operator);
		resultDisplay.textContent = ans;
		calculationDisplay.textContent = a + operator + b;
		a = ans;
		b = "";
		usedDecimal = false;
	} else {
		return;
	}
});
