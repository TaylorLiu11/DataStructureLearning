// O(n^2) Version
// let twoSum = function (nums, target) {
//     let container = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if ((nums[i] + nums[j]) === target) {
//                 container.push(i);
//                 container.push(j);
//                 return container;
//             }
//         }
//     }
// };

let nums = [1, 2, 7, 9, 11, 15];
// target = 26

// O(n^2) Version
// let twoSum = function (nums, target) {
//     let container = [];
//     let indexCheck1 = 0;
//     let indexCheck2 = 1;
//     while (indexCheck2 < nums.length) {
//         if ((nums[indexCheck1] + nums[indexCheck2]) === target) {
//             container.push(indexCheck1);
//             container.push(indexCheck2);
//             return container;
//         }
//         if (indexCheck2 === (nums.length - 1)) {
//             indexCheck1++;
//             indexCheck2 = indexCheck1 + 1;
//         } else {
//             indexCheck2++;
//         }
//     }
// };

// O(n) Version
let twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined && map[target - nums[i]] !== i) {
            return [map[target - nums[i]], i];
        }
    }
};

console.log(twoSum(nums, 26));

// Teacher's solution
// var twoSum = function (nums, target) {
//     let map = {};
//     let res;
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         res = target - nums[i];
//         if (map[res] !== undefined) {
//             return [map[res], i];
//         } else {
//             map[nums[i]] = i;
//         }
//     }
// };