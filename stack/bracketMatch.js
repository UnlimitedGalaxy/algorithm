const MyStack = require('../stack').MyStack;

/*
* judge if it is valid
* */
function isBracketMatch(str) {
	let stack = new MyStack();
	for (let i = 0; i < str.length; i++) {
		const currentChar = str[i];
		if (currentChar === '{' || currentChar === '[' || currentChar === '(') {
			stack.push(currentChar);
		} else {
			if (stack.isEmpty()) {
				return false;
			}
			
			let topChar = stack.pop();
		}
		
	}
}
