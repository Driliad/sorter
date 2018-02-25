class Sorter {
  constructor() {
    // your implementation
    this.array = [];

    this.compareFunction = function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;

      return 0;
    }
  }

  add(element) {
    // your implementation
    return this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation

    var sortArray = [];

    this.array.forEach((value, index) => {
      for (let i = 0; i < indices.length; i++) {
        if (indices[i] === index) sortArray.push(value);
      }
    })

    if (this.compareFunction) {
      sortArray.sort(this.compareFunction);
    }

    this.array.forEach((value, index) => {
      for (let i = 0; i < indices.length; i++) {
        if (indices[i] === index) this.array[index] = sortArray.shift();
      }
    })
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;