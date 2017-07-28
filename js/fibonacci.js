function fibonacci(num) {
    var memoryObject = {}; //here we write a result of calculation
    return function f(num) {
        var val;
        if (num in memoryObject) {
            val = memoryObject[num];
        } else {
            if (num === 0 || num === 1) {
                val = num;
            } else {
                val = f(num - 2) + f(num - 1);
                memoryObject[num] = val;
            }
        }
        return val;
    }(num);
}

module.exports = fibonacci;
