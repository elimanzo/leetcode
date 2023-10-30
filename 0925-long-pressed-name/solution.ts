// https://leetcode.com/problems/long-pressed-name/
// 0925-long-pressed-name

function isLongPressedName(name: string, typed: string): boolean {
  const nameChunks = yieldChunks(name);
  const typedChunks = yieldChunks(typed);

  while(true) {
    const n = nameChunks.next();
    const t = typedChunks.next();
    if(n.done && t.done) {
      return true;
    }
    if(t.done || n.done) {
      return false;
    }
    const nVal = n.value;
    const tVal = t.value;
    if(nVal.letter !== tVal.letter || nVal.count > tVal.count) {
      return false;
    }
  }
};

type Chunk = {letter: string, count: number};

function* yieldChunks(n: string): Generator<Chunk> {
  let chunk = null;
  for(const c of n) {
    if(chunk == null || chunk.letter !== c) {
      chunk && (yield chunk);
      chunk = {letter: c, count: 0};
    }
    chunk.count++;
  }
  chunk && (yield chunk);
}


// function isLongPressedName(name: string, typed: string): boolean {
//   const nameChunks = letterChunks(name);
//   const typedChunks = letterChunks(typed);

//   if(nameChunks.length !== typedChunks.length) {
//     return false;
//   }
  
//   for(let i = 0; i < nameChunks.length; i++) {
//     const n = nameChunks[i];
//     const t = typedChunks[i];
//     if(n[0] !== t[0] || n.length > t.length) {
//       return false;
//     }
//   }
//   return true;
// };


// function letterChunks(n: string): string[] {
//   const chunks = [];
//   for(const c of n) {
//     if(chunks.length === 0 || chunks.at(-1)[0] !== c) {
//       chunks.push([]);
//     }
//     chunks.at(-1).push(c);
//   }
//   return chunks.map(group => group.join(''));
// }

// function isLongPressedName(name: string, typed: string): boolean {
//   let namePointer = 0;
//   let typedPointer = 0;
//   while(true) {
//     if(namePointer >= name.length && typedPointer >= typed.length) {
//       return true;
//     }
//     if(typedPointer >= typed.length) {
//       return false;
//     }
//     if(namePointer >= name.length) {
//       if(typed[typedPointer] !== name[namePointer - 1]) {
//         return false;
//       }
//       typedPointer++;
//       continue;
//     }

//     const nameLetter = name[namePointer];
//     const typedLetter = typed[typedPointer];

//     if(nameLetter === typedLetter) {
//       namePointer++;
//       typedPointer++;
//       continue;
//     }
//     if(name[namePointer - 1] === typedLetter) {
//       typedPointer++;
//       continue;
//     }
//     return false;
//   }
// };
