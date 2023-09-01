// https://leetcode.com/problems/valid-parentheses/description/
// 0020-valid-parentheses

// streaming: we don't get the data all at once
// impose a a restriction: we do not have access all at once
// see one character at a time
// force yourself to look at 1 element at a time
function isValid(s: string): boolean {
    const stack = [];
    const myMap = {')' : '(', '}' : '{', ']' : '['}
    for(const c of s) {
        const closedParen = myMap[c];
        if(!closedParen) {
            stack.push(c);
            continue;
        }

        const lastParen = stack.pop();

        if(stack.length === 0 && closedParen !== lastParen) return false;
    }

    return stack.length === 0;
};
