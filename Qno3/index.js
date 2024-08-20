// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.

const Calculator = {
    result: 0,
    add: function (value) {
        this.result += value;
        return this; 
    },

    subtract: function (value) {
        this.result -= value;
        return this;
    },
    multiply: function (value) {
        this.result *= value;
        return this;
    },
    divide: function (value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            console.log('Error: Division by zero is not allowed.');
        }
        return this; 
    },

    reset: function() {
        this.result = 0;
        return this; 
    },

    getResult: function() {
        console.log(this.result);
        return this; 
    }
};

Calculator.add(10).subtract(5).multiply(2).divide(5).getResult();
Calculator.reset().add(20).multiply(3).divide(2).getResult();


