// https://leetcode.com/problems/determine-if-two-events-have-conflict/
// 2446-determine-if-two-events-have-conflict

type TimeEvent = readonly [string, string];

function haveConflict(...events: [TimeEvent, TimeEvent]): boolean {
  const sortedEvents = events.map(formatEvent).sort(([aStart], [bStart]) => aStart - bStart);
  return sortedEvents[0][1] >= sortedEvents[1][0];
};

function formatEvent(event: TimeEvent): [number, number] {
  return event.map(formatTime) as [number, number];
}

function formatTime(s: string): number {
  return Number(s.replace(/:/, ''));
}

// function haveConflict(...events: [TimeEvent, TimeEvent]): boolean {
//   const sortedEvents = events.sort(([aStart], [bStart]) => aStart.localeCompare(bStart));
//   return sortedEvents[0][1] >= sortedEvents[1][0];
// };
