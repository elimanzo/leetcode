// https://leetcode.com/problems/find-all-people-with-secret/description/
// 2092-find-all-people-with-secret

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
  const knownSet = new Set<any>([0, firstPerson]);
  const sortedMeetings = [];
  meetings.sort((a, b) => a[2] - b[2]);

  const seenTime = new Set();

  for (const [person1, person2, time] of meetings) {
    if (!seenTime.has(time)) {
      seenTime.add(time);
      sortedMeetings.push([]);
    }
    sortedMeetings.at(-1).push([person1, person2])
  }

  for (const group of sortedMeetings) {
    const peopleKnowSecret = new Set();
    const graph = {};

    for (const [p1, p2] of group) {
      graph[p1] ??= [];
      graph[p2] ??= [];

      graph[p1].push(p2);
      graph[p2].push(p1);

      if (knownSet.has(p1)) { 
        peopleKnowSecret.add(p1) 
      };
      if (knownSet.has(p2)) { 
        peopleKnowSecret.add(p2) 
      };
    }

    const queue = [...peopleKnowSecret];
    let qi = 0;
    while (qi < queue.length) {
      const curr = queue[qi++];
      for(const neighbor of graph[curr as any]){
        if(!knownSet.has(neighbor)) {
          knownSet.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  return [...knownSet];
};
