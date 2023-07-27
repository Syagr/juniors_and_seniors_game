const start = () => {
	const numberOfDigits = +promt("Enter number of digits");
	if (number.isNaN(numberOfDigits) || numberOfDigits < 2 || numberOfDigits > 9) {
		alert("Enter number beetwen 2 and 9 inclusively");
		start();
		return;
	}
	let answer = [];

	const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	let randomNumber = getRandomIndex();
	alert(randomNumber4);
};

const getRandomIndex = () => {
	return (+Math.random().toFixed(1) * 10)
}
start();