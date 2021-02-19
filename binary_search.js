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


const arr2 = [1,5,7,4,3,5,1,9,10,12,11,16,2,5,7,8,6];

// the sorting method works with elements as with a string, so we will define a custom function
arr2.sort((a, b) => a - b); // array was sorted

console.log(countFreq(arr2, 5));

//function that counts the frequency of occurrence of a particular element
function countFreq(arr, el) {
    const posEl = binarySearchElement(arr, el); //element's position in array
    if (posEl === -1) {
        return 0; // frequency = 0
    }
    let i = posEl;
    while (arr[i] === el) {
        i--;
    }
    let j = posEl;
    while (arr[j] === el) {
        j++;
    }
    return j - i - 1;
}