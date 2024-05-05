function numRescueBoats(people: number[], limit: number): number {
  // people[i] = weight of each person
  // infinite amount of boats can carry max of limit
  // Each boat can carry at most 2 (so 1 or 2)
  // each person doesn't surpass the limit
  // return the minimum amount of boats to carry everyone

  let res = 0;
  people.sort((a, b) => a - b);
  let lo = 0;
  let hi = people.length - 1;
  while (lo <= hi) {
    if(people[lo] + people[hi] <= limit) {
      lo++;
    }
    hi--;
    res++;
  }

  return res;
};
