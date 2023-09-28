// https://leetcode.com/problems/number-of-valid-clock-times/
// 2437-number-of-valid-clock-times

function countTime(time: string): number {
  return hourOptions(time.slice(0, 2)) * minuteOptions(time.slice(3));
};

function hourOptions(hh: string):number {
  let res = 0;
  for(let hour = 0; hour < 24; hour++) {
    const newTime = `${formatTime(hour)}`;
    if(isTimeMatched(hh, newTime)) {
      res++;
    }
  }
  return res;
}

function minuteOptions(mm: string): number {
  let res = 0;
  for(let minute = 0; minute < 60; minute++) {
    const newTime = `${formatTime(minute)}`;
    if(isTimeMatched(mm, newTime)) {
      res++;
    }
  }
  return res;
}

function formatTime(n: number): string {
  if(n < 10) {
    return '0' + n;
  }
  return n.toString();
}

function isTimeMatched(oldTime: string, newTime: string): boolean {
  for(let i = 0; i < oldTime.length; i++) {
    if(oldTime[i] === newTime[i] || oldTime[i] === '?') {
      continue;
    }
    return false;
  }
  return true;
}
