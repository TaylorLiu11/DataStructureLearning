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