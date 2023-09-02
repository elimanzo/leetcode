// https://leetcode.com/problems/palindrome-number/description/
// 0009-palindrome-number

function* getDigits(x: number) {
    while (x > 0) {
        yield x % 10;
        x = Math.floor(x / 10)
    }
}

function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const digitArr: number[] = [...getDigits(x)];
    let low = 0
    let high = digitArr.length - 1
    while (low < high) {
        if(digitArr[low++] !== digitArr[high--]) return false;
    }  

    return true;
}

function isPalindromeString(s: string): boolean {
    let low = 0;
    let high = s.length - 1;

    while(low < high) {
        if(s[low++] !== s[high--]) return false;
    }
    return true;
}
