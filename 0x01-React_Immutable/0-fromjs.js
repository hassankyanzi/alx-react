// Use CommonJS syntax
const { fromJS } = require('immutable');

// Define the getImmutableObject function
function getImmutableObject(object) {
    return fromJS(object);
}

// Export the function
module.exports = { getImmutableObject };

// Example usage (optional, for testing purposes)
const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Call the function and log the result to the console
const immutableObject = getImmutableObject(obj);
console.log(immutableObject);
