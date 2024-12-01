function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
  const stack = [];
  for(const [pos, spd] of cars) {
    const dest = (target - pos ) / spd;
    stack.push(dest);
    if(stack.length > 1 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }

  return stack.length;
};
