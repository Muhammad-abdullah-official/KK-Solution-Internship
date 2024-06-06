let stdName = 'Abdullah';
let stdAge = 20;
let stdGrades = [60, 70, 65.6, 80.2, 90];
let isEnrolled = false;

function calculateAverage(stdGrades) {
  let len = stdGrades.length;
  let score = 0;
  for (let i = 0; i < len; i++) {
    score += stdGrades[i];
  }
  return score / len;
}

console.log(`Student Name: ${stdName}`);
console.log(`Average Grade: ${calculateAverage(stdGrades).toFixed(1)}`);
let checkisEnrolled;
if (isEnrolled === false) {
  console.log(`${stdName} is not enrolled`);
} else {
  console.log(`${stdName} is enrolled`);
}

isEnrolled = true;
stdGrades.push(97);
let averageGrade = calculateAverage(stdGrades);
console.log(`Updated Average Grade: ${averageGrade.toFixed(1)}`);
let welcomeMessage = `Welcome, ${stdName}!`;
console.log(welcomeMessage);
if (isEnrolled === false) {
  console.log(`${stdName} is not enrolled`);
} else {
  console.log(`${stdName} is enrolled`);
}
