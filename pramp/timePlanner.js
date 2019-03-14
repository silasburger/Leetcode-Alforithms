/**
 * 
 * Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.
 * 
 input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
  output: [60, 68]
 */


function meetingPlanner(slotsA, slotsB, dur) {
  let latestStart;
  let earliestFinish;
  let start;
  let pA = 0;
  let pB = 0;
  while(pA < slotsA.length && pB < slotsB.length) {
    latestStart = slotsA[pA][0] > slotsB[pB][0] ? slotsA[pA][0] : slotsB[pB][0];
    earliestFinish = slotsA[pA][1] < slotsB[pB][1] ? slotsA[pA][1] : slotsB[pB][1];
    if(earliestFinish - latestStart >= dur) return [latestStart, latestStart+dur];
    if(slotsA[pA][1] < slotsB[pB][1]) {
      pA++;
    } else {
      pB++;
    }
  }
  return [];
}

//time: O(n+m) because at worst you would check each index of both inputs.
//space: O(1) because we are only using variables that are occupying a constant amount of space.  