// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// 1700-number-of-students-unable-to-eat-lunch

function countStudents(students: number[], sandwiches: number[]): number {
  const freq = {};
  for(const s of students) {
    freq[s] = (freq[s] ?? 0) + 1;
  }
  for(const s of sandwiches) {
    if(freq[s] == null || freq[s]-- === 0) {
      return freq[1 - s];
    }
  }
  return 0;
};
