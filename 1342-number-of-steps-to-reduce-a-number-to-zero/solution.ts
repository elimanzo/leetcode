// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
// 1342-number-of-steps-to-reduce-a-number-to-zero

// function numberOfSteps(num: number): number {
//     let counter = 0;
//     while (num > 0) {
//         num = num % 2 == 0 ? num / 2 : num - 1;
//         counter++;
//     }
//     return counter;
// };

// function numberOfSteps(num: number): number {
//     return num !== 0 ? numberOfSteps(num % 2 == 0 ? num / 2 : num - 1) + 1 : 0
// };

function numberOfSteps(num: number): number {
    // handles negative ( Even though problem doesn't say we get negatives, it's just neat to know how to handle them :3 )

    // 1110 div 2
    // 111  sub 1
    // 110  div 2
    // 11   sub 1 
    // 10   div 2
    // 1    sub 1
    // 0    stop when we get to 0
    const s = (num >>> 0).toString(2);

    let oneCounter = 0;
    for(const c of s){
        if (c === '1') {
            oneCounter++;
        }
    }

    return s.length + oneCounter - 1;

};
