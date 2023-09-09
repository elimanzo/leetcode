// https://leetcode.com/problems/largest-odd-number-in-string/description/
// 1903-largest-odd-number-in-string

// function largestOddNumber(num: string): string {
//     for(let i = num.length - 1; i >= 0; i--) {
//         if(parseInt(num[i]) % 2 !== 0) {
//             return num.slice(0, i + 1);
//         }
//     }
//     return '';
// };

// function largestOddNumber(num: string): string {
//     const stack = Array.from(num);
//     for(let i = num.length - 1; i >= 0; i--) {
//         if(parseInt(num[i]) % 2 !== 0) {
//             return stack.join('');
//         }
//         stack.pop();
//     }
//     return stack.join('');
// };

function largestOddNumber(num: string): string {
    return num.replace(/[02468]+$/, '');
};
