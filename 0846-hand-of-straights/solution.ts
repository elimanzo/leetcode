// 0846-hand-of-straights

function isNStraightHand(hand: number[], groupSize: number): boolean {
   if(hand.length % groupSize !== 0) {
    return false;
   }
   const freq = {};
   for(const card of hand) {
    freq[card] = (freq[card] ?? 0) + 1;
   }
   const sortedCards = Array.from(Object.keys(freq).map(Number)).sort((a, b) => a - b);
   for(const card of sortedCards) {
    const count = freq[card];
    if(count <= 0) {
      continue;
    }
    for(let i = 0; i < groupSize; i++) {
      if((freq[card + i] ?? 0) < count) {
        return false;
      }
      freq[card + i] = freq[card + i] - count;
    }
   }
   return true;
};
