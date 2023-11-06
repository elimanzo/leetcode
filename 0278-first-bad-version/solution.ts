// https://leetcode.com/problems/first-bad-version/
// 0278-first-bad-version

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
      let lo = -1;
      let hi = n + 1;
      while(lo + 1 !== hi) {
        const mid = Math.floor((lo + hi) / 2);
        if(isBadVersion(mid)) {
          hi = mid;
        } else {
          lo = mid;
        }
      } 
      return hi;
    };
};
