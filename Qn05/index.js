// Create a simple polyfill for the Array.includes method by the name of customIncludes

if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) {
        for (let i = 0; i < this.length; i++) {
            
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.customIncludes(3)); 
console.log(numbers.customIncludes(6)); 
