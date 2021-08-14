// O(n^2) Version
let twoSum = function (nums, target) {
    let container = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                container.push(i);
                container.push(j);
                return container;
            }
        }
    }
};

// O(?) Version
let twoSum = function (nums, target) {
    let container = [];
    let indexCheck1 = 0;
    let indexCheck2 = 1;
    while (indexCheck2 < nums.length) {
        if ((nums[indexCheck1] + nums[indexCheck2]) === target) {
            container.push(indexCheck1);
            container.push(indexCheck2);
            return container;
        }
        if (indexCheck2 === (nums.length - 1)) {
            indexCheck1++;
            indexCheck2 = indexCheck1 + 1;
        } else {
            indexCheck2++;
        }
    }
};