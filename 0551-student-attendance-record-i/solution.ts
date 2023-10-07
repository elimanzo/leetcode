// https://leetcode.com/problems/student-attendance-record-i/
// 0551-student-attendance-record-i

function checkRecord(s: string): boolean {
  let aCounter = 0;
  let lCounter = 0;
  for(const c of s) {
    lCounter = c === 'L' ? lCounter + 1 : 0;
    aCounter += c === 'A' ? 1 : 0;
    if(lCounter === 3 || aCounter === 2) {
      return false;
    }
  }
  return true;
};

// function checkRecord(s: string): boolean {
//   return !/A.*A|LLL/.test(s);
// };
