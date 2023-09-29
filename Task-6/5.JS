function areEquivalentObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
const object1 = {
    name: "John",
    age: 30,
    city: "New York"
};

const object2 = {
    name: "John",
    age: 30,
    city: "New York"
};

const object3 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};

console.log(areEquivalentObjects(object1, object2)); // Output: true
console.log(areEquivalentObjects(object1, object3)); // Output: false