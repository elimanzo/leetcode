// https://leetcode.com/problems/valid-anagram/description/
// 0242-valid-anagram

function isAnagram(s: string, t: string): boolean {
    return Array.from(s).sort().join('') === Array.from(t).sort().join('');
};

// function isAnagram(s: string, t: string): boolean {
//     let dictS = {};
//     let dictT = {};

//     for (const c of s) {
//         dictS[c] = (dictS[c] ?? 0) + 1;
//     }

//     for (const c of t) {
//         dictT[c] = (dictT[c] ?? 0 ) + 1;
//     }
    
//     for(const key in dictS) {
//         if (!dictT[key] || dictT[key] !== dictS[key]) {
//             return false;
//         }
//     }
//     return s.length === t.length;
// };
