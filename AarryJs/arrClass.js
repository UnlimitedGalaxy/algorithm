/**
 * myArr [my own ar]
 * @param {Object} param [param]
 * -> { Number} capacity
 * @return {}  [description]
 */
class MyArr {
	constructor(props = {}) {
		const defaultProps = {
			capacity: 10
		};
		const { capacity } = Object.assign(defaultProps, props);
		this.data = Array.from({length: capacity});
		this.size = 0;
	}
	
	getSize() {
		return this.size;
	}
	
	getCapacity() {
		return this.data.length;
	}
	
	isEmpty() {
		return this.size === 0;
	}
	
	// add element at the end of arr
	addLast(i) {
		let { data, size } = this;
		// last time, size become data.length
		if ( size >= data.length ) {
			throw new Error('addLast failed. Array is stuffed');
		}
		data[size] = i;
		size ++;
	}
	
	switchItems(itemAIndex, itemBIndex) {
	
	}
	
	add (index, e) {
	
	}
}

const myArr = new MyArr({capacity: 10});
