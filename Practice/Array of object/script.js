const students = [
  // Changed 'Student' to 'students' (plural)
  {
    stdName: 'Abdullah',
    stdAge: 20,
    stdGrades: [60, 70, 65.6, 80.2, 90],
    isEnrolled: false,
  },
  {
    stdName: 'Ali',
    stdAge: 22,
    stdGrades: [85, 92, 78],
    isEnrolled: true,
  },
];

function calculateAverage(stdGrades) {
  let len = stdGrades.length;
  let score = 0;
  for (let i = 0; i < len; i++) {
    score += stdGrades[i];
  }
  return score / len;
}

// Loop through each student in the 'students' array
for (const student of students) {
  console.log(`Student Name: ${student.stdName}`); // Access properties using dot notation
  console.log(
    `Average Grade: ${calculateAverage(student.stdGrades).toFixed(1)}%`
  );
  console.log(student.isEnrolled ? 'Enrolled' : 'Not Enrolled');

  // Update enrollment and grades (if needed)
  student.isEnrolled = true; // Example update
  student.stdGrades.push(97); // Example adding a grade

  // Recalculate and print updated average (if needed)
  const updatedAverage = calculateAverage(student.stdGrades);
  console.log(`Updated Average Grade: ${updatedAverage.toFixed(1)}%`);

  console.log(`Welcome, ${student.stdName}!`);
  console.log(); // Add a blank line for separation
}
