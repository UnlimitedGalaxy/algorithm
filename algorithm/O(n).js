function sum(arr) {
	let sum = 0
	for (let e of arr) {
		sum += e;
	}
	return sum;
}
let test = [1, 2, 3];
console.log(sum(test));