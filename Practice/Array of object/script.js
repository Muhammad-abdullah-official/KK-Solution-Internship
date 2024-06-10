const students = [
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

for (const student of students) {
  console.log(`Student Name: ${student.stdName}`);
  console.log(
    `Average Grade: ${calculateAverage(student.stdGrades).toFixed(1)}%`
  );
  console.log(student.isEnrolled ? 'Enrolled' : 'Not Enrolled');

  student.isEnrolled = true;
  student.stdGrades.push(97);
  const updatedAverage = calculateAverage(student.stdGrades);
  console.log(`Updated Average Grade: ${updatedAverage.toFixed(1)}%`);

  console.log(`Welcome, ${student.stdName}!`);
  console.log();
}

// second part
let studentS = [
  {
    rollNo: 1,
    name: 'Alice',
    age: 17,
    class: 6,
    marks: { math: 85, science: 90, english: 88 },
  },
  {
    rollNo: 2,
    name: 'Bob',
    age: 16,
    class: 9,
    marks: { math: 75, science: 70, english: 78 },
  },
  {
    rollNo: 3,
    name: 'Charlie',
    age: 15,
    class: 9,
    marks: { math: 95, science: 85, english: 92 },
  },
  {
    rollNo: 4,
    name: 'David',
    age: 15,
    class: 9,
    marks: { math: 65, science: 80, english: 72 },
  },
  {
    rollNo: 5,
    name: 'Eve',
    age: 16,
    class: 9,
    marks: { math: 88, science: 89, english: 84 },
  },
];

// Step 2: Calculate total obtained marks of each subject for each student
studentS.forEach((student) => {
  student.totalMarks =
    student.marks.math + student.marks.science + student.marks.english;
});

// Step 3: Sort students in descending order based on total marks
studentS.sort((a, b) => b.totalMarks - a.totalMarks);

// Step 4: Print the top 3 students with their info
console.log('Top 3 Students:');
studentS.slice(0, 3).forEach((student) => {
  console.log(
    `Roll No: ${student.rollNo}, Name: ${student.name}, Total Marks: ${student.totalMarks}`
  );
});

// Step 5: Define a function called searchStudent() to search for a student by roll number
function searchStudent(rollNo) {
  const student = studentS.find((student) => student.rollNo === rollNo);
  if (student) {
    console.log(
      `Student Found: Roll No: ${student.rollNo}, Name: ${student.name}, Total Marks: ${student.totalMarks}`
    );
  } else {
    console.log('Student not found.');
  }
}

searchStudent(3); // Searching for student with roll number 3
searchStudent(6); // Searching for a student that does not exist
