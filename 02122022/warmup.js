// this is a classic graph problem. 
// you are given number of courses and a prereqsits array. 
// [A,B] means that B is a prereqsit for A. there is no limit how many courses you can take in one semaster. 
// You can assume that it is possible to eventually complete all courses.

// keywords,research on longestPath prolbem. it's the bedrock of solving this problem. 

const CoursesNum = 6;
const pre = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersCount(numCourses, prereqs); // -> 3
