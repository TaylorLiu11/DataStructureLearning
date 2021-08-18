let isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let collect = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            collect.push(s[i]);
        } else {
            if (s[i] === ")") {
                if (collect[collect.length - 1] === "(") {
                    collect.pop();
                } else {
                    return false;
                }
            } else if (s[i] === "]") {
                if (collect[collect.length - 1] === "[") {
                    collect.pop();
                } else {
                    return false;
                }
            } else {
                if (collect[collect.length - 1] === "{") {
                    collect.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return collect.length === 0 ? true : false;
};
console.log(isValid('{((([()]))'));
console.log(isValid('{({([()])})}'));
console.log(isValid("(]"));
console.log(isValid("([)]"));

// Teacher's solution
//var isValid = function (s) {
// let len = s.length;

// let map = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
// };

// let stack = [];
// for (let i = 0; i < len; i++) {
//     let cur = s[i];
//     if (map[cur] === undefined) {
//         stack.push(s[i]);
//     } else if (stack[stack.length - 1] === map[cur]) {
//         stack.pop();
//     } else {
//         return false;
//     }
// }
// return stack.length === 0;
// };