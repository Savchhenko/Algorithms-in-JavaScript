// const arr = [1,2,3,4,5,6,7,8,9];
const arr = new Array(1000);
for(let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
}

const el = Math.floor(Math.random() * arr.length);
console.log('Searchable element: ', el);

function binarySearchElement (arr, el) {
    // O(log N) - base of the logarithm is 2
    let left = -1;
    let rigth = arr.length;

    while (rigth - left > 1) {
        const mid = Math.floor((left + rigth) / 2);

        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] > el) {
            rigth = mid;
        } else {
            left = mid;
        }
    }
    return -1;
}

console.log('Index of the element in array: ', binarySearchElement(arr, el));