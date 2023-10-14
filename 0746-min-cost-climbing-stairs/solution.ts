// https://leetcode.com/problems/min-cost-climbing-stairs/solutions/
// 0746-min-cost-climbing-stairs

function minCostClimbingStairs(cost: readonly number[]): number {
  const totalCosts = cost.slice(0, 2);
  for (let i = 2; i <= cost.length; ++i) {
    const curCost = (cost[i] ?? 0) + Math.min(...totalCosts);
    totalCosts.push(curCost);
    totalCosts.shift();
  }
  return totalCosts.at(-1);
}

// function minCostClimbingStairs(cost: number[]): number {
//   const cache = {};
//   const getTotalCost = (index: number) => {
//     if(index < 2) {
//       return cost[index];
//     }
//     if(cache[index] != null) {
//       return cache[index];
//     }
//     const currentCost = Math.min(getTotalCost(index - 2), getTotalCost(index - 1)) + (cost[index] ?? 0)
//     cache[index] = currentCost;
//     return currentCost;
//   }
//   return getTotalCost(cost.length);
// };

// function minCostClimbingStairs(cost: number[]): number {
//   let totalCost = [...cost, 0];
//   for(let i = 2; i < totalCost.length; i++) {
//     totalCost[i] += Math.min(totalCost[i - 2], totalCost[i - 1]);
    
//   }
//   return totalCost.at(-1);
// };





