// https://leetcode.com/problems/prime-in-diagonal/description/
// 2614-prime-in-diagonal

/*

primes = [
    2, 3, 5, 7
 ]

0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
X X P P X P X P X X X     X     X  X  X     X     X  X   X     X  X

*/


const MAX = 4 * 1000 * 1000;

function diagonalPrime(nums: number[][]): number {
    // false means prime
    // true means not prime
    let sieve: boolean[] = new Array(MAX + 1);
    sieve[0] = true;
    sieve[1] = true;

    for(let i = 2; i <= MAX; i++) {
        if(sieve[i]) {
            continue;
        }

        for(let j = i * 2; j <= MAX; j += i) {
            sieve[j] = true;
        }
    }

    let res = 0;
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        let left = nums[i][i];
        if(left > res && !sieve[left]) {
            res = left;
        }

        let right = nums[i][(n - 1) - i];
        if(right > res && !sieve[right]) {
            res = right;
        }
    }
    return res;
};

// function isPrime(num: number): boolean {
//     for(let i = 2; i * i <= num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }


// function diagonalPrime(nums: number[][]): number {
//     let res = 0;
//     const n = nums.length;

//     for(let i = 0; i < n; i++) {
//         let left = nums[i][i];
        
//         if(left > res && isPrime(left)) {
//             res = left;
//         }

//         let right = nums[i][(n - 1) - i];
//         if(right > res && isPrime(right)) {
//             res = right;
//         }

//     }
//     return res;
// };
