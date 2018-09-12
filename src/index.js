class Sorter {
	constructor() {
		this.array = [];
	}

	compareFunction(a, b) {
		if (a < b) return -1;
		if (a > b) return 1;

		return 0;
	}

	add(element) {
		this.array.push(element);
	}

	at(index) {
		return this.array[index];
	}

	get length() {
		return this.array.length;
	}

	toArray() {
		return this.array;
	}

	sort(indices = []) {
		let sortArray = [];

		for (let index = 0; index < indices.length; index++) {
			sortArray.push(this.array[indices[index]]);
		}

		if (this.compareFunction) {
			sortArray.sort(this.compareFunction);
		}

		this.array.forEach((value, index) => {
			for (let i = 0; i < indices.length; i++) {
				if (indices[i] === index) this.array[index] = sortArray.shift();
			}
		});
	}

	setComparator(compareFunction) {
		this.compareFunction = compareFunction;
	}
}

module.exports = Sorter;
