// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/
// 1736-latest-time-by-replacing-hidden-digits

function maximumTime(time: string): string {
  let res = '';
  const reg = new RegExp(time.replace(/\?/g, '.'));
  for(let hour = 0; hour < 24; hour++) {
    for(let minute = 0; minute < 60; minute++) {
      const newTime = formatTime(hour) + ':' + formatTime(minute)
      if(reg.test(newTime)) {
        res = newTime;
      }
    }
  }
  return res;
};

function formatTime(n: number): string {
  return `${n < 10 ? '0'+ n : n}`;
}

// function maximumTime(time: string): string {
//   let res = '';
//   for(let hour = 0; hour < 24; hour++) {
//     for(let minute = 0; minute < 60; minute++) {
//       const newTime = formatTime(hour) + ':' + formatTime(minute)
//       if(isTimeMatched(time, newTime)) {
//         res = newTime;
//       }
//     }
//   }
//   return res;
// };

// function isTimeMatched(oldTime: string, newTime: string): boolean {
//   for(let i = 0; i < oldTime.length; i++) {
//     if(oldTime[i] === newTime[i] || oldTime[i] === '?') {
//       continue;
//     }
//     return false;
//   }
//   return true;
// }
