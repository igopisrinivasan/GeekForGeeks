let arrOne = [2,7,11,15,18,21,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100];
let target = 26;
console.log(twoSum(arrOne, target));
console.log(twosum1(arrOne, target));
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}


function twosum1(arr, target) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (hash[diff]) {
            return [hash[diff], i];
        }
        hash[arr[i]] = i;
    }
}