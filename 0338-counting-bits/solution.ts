// https://leetcode.com/problems/counting-bits/description/
// 0338-counting-bits

function countBits(n: number): number[] {
    const res = []
    let counter = 0;
    for(let i = 0; i <= n; i++) { 
        for(const digit of getDigits(i)) {
            if (digit === 1) counter++;
        }
        res.push(counter);
        counter = 0;
    }
    return res;
};

function* getDigits(n: number): Generator<number> {
    while (n > 0) {
        const mod = n % 2
        yield mod;
        n = (n - mod) / 2;
    }
}
