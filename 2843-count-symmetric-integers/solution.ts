// https://leetcode.com/problems/count-symmetric-integers/
// 2843-count-symmetric-integers

function countSymmetricIntegers(low: number, high: number): number {
    let counter = 0;
    for (let i = low; i <= high; i++) {
        if(isSymmetric(i)) {
            counter++;
        }
    }
    return counter;
};

function isSymmetric(a: number): boolean {
    const x = `${a}`.split('').map(Number);
    const digitLength = x.length;
    if(digitLength % 2 !== 0) {
        return false;
    }

    let low = 0;
    let high = digitLength - 1;
    let diff = 0;

    while(low < high) {
        diff += x[low++] - x[high--];
    }

    return diff === 0
}

function getDigitLen(x: number): number {
    return x !== 0 ? Math.floor(Math.log10(x)) + 1 : 1;
}

function digitAt(x: number, i: number): number {
    return Math.floor(x / 10 ** i) % 10;
}
