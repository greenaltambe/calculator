const calculationDisplay = document.querySelector("#calculation");
const resultDisplay = document.querySelector("#result");
let a = "";
let b = "";
let operator = "";

function reset() {
	a = "";
	b = "";
	operator = "";
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

	return answer;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
	numberButton.addEventListener("click", () => {
		let temp = numberButton.textContent;
		console.log({ b });
		if (operator === "") {
			a += temp;
			resultDisplay.textContent = a;
		} else {
			// calculationDisplay.textContent = a + operator + b;
			// a = String(operate(a, b, operator));
			b += temp;
			// operator = "";
			resultDisplay.textContent = b;
		}

		console.log({ a });
		console.log({ operator });
	});
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
	operatorButton.addEventListener("click", () => {
		operator = operatorButton.textContent;
		console.log({ operator });
	});
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", reset);

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
	a = a.slice(0, -1);
	resultDisplay.textContent = a;
});

const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener("click", () => {
	let ans = operate(a, b, operator);
	resultDisplay.textContent = ans;
	calculationDisplay.textContent = a + operator + b;
	a = ans;
	b = "";
});
