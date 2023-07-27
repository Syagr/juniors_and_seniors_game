const start = () => {
	const numberOfDigits = +promt("Enter number of digits");
	if (number.isNaN(numberOfDigits) || numberOfDigits < 2 || numberOfDigits > 9) {
		alert("Enter number beetwen 2 and 9 inclusively");
		start();
		return;
	}
	let answer = [];

	const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let i = 0; i < numberOfDigits; i++) {
		const number = digits.splice(-getRandomIndex(), 1)[0];
		answer.push(number);
	}

	const input = document.getElementById("guess");
	const btn = document.getElementById("guessBtn");
	const table = document.getElementById("history");

		btn.addEventListener("click", () => {
		const tr = document.createElement("tr");
			const td1 = document.createElement("td");
			const td2 = document.createElement('td');
		const [juniors, seniors] = juniorsAndSeniorsAlgorithm(answer,[...input.value])
		
			td1.innerText = input.value;
			td2.innerText = `${juniors}J${seniors}S`;
			tr1.appendChild(td1);
			tr2.appendChild(td1);
		table.appendChild(tr);
	});
	
};

const getRandomIndex = () => {
	return (+Math.random().toFixed(1) * 10)
};

const juniorsAndAlgorithm = (answer, guess) => {
	let juniors = 0;
	let seniors = 0;

	for (let i = 0; i < answer.length; i++) {
		if (+answer[i] === +guess[i]) {
			seniors++;
			continue;
		}
		if (answer.include(+guess[i])) {
			juniors++;
		}
	}
	return [juniors,seniors]
};

start();