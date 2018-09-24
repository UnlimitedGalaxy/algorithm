const capacity = 10;
const test1 = new Array(capacity);
const test2 = Array.call(null, {length: capacity});
const test3 = Array.apply(1, {length: capacity});
const test4 = Array.from({length: capacity});
const test5 = Array.prototype.slice.call({length: capacity})
// 任意多个数值
const test6 = Array.of(1, 'string', {a: 'a'});
debugger;
test3.forEach(i => {
	console.log(i);
});
