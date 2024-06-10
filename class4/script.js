let students = [
  {
    studentRollNo: '1-A',
    studentName: 'Abdullah',
    studentAge: 16,
    obtainedMarks: [
      {
        subjectName: 'English',
        marks: 50,
      },
      {
        subjectName: 'Computer',
        marks: 50,
      },
      {
        subjectName: 'Math',
        marks: 90,
      },
    ],
    studentClass: 10,
    studentSection: 'A',
  },
  {
    studentRollNo: '2-A',
    studentName: 'Ahmed',
    studentAge: 16,
    obtainedMarks: [
      {
        subjectName: 'English',
        marks: 90,
      },
      {
        subjectName: 'Computer',
        marks: 80,
      },
      {
        subjectName: 'Math',
        marks: 60,
      },
    ],
    studentClass: 10,
    studentSection: 'A',
  },
  {
    studentRollNo: '1-B',
    studentName: 'Ahmer',
    studentAge: 16,
    obtainedMarks: [
      {
        subjectName: 'English',
        marks: 60,
      },
      {
        subjectName: 'Computer',
        marks: 50,
      },
      {
        subjectName: 'Math',
        marks: 71,
      },
    ],
    studentClass: 10,
    studentSection: 'B',
  },
];

// Calculate total marks for each student
students.forEach((student) => {
  let totalMarks = student.obtainedMarks.reduce(
    (acc, subject) => acc + subject.marks,
    0
  );
  student.totalMark = totalMarks;
});

// function to calculate Grades
function calculateGrades(totalMarks) {
  let percentage = (totalMarks / 300) * 100;
  if (percentage >= 80) {
    return 'A';
  } else if (percentage >= 70) {
    return 'B';
  } else if (percentage >= 60) {
    return 'C';
  } else if (percentage >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

// for (let i = 0; i < students.length; i++) {
//   console.log('Student-Name', students[i].studentName);
//   console.log('Student-Age', students[i].studentAge);
//   console.log('Student-RollNo', students[i].studentRollNo);
//   console.log('Student-Class', students[i].studentClass);
//   console.log('Student-Section', students[i].studentSection);
//   for (let j = 0; j < students[i].obtainedMarks.length; j++) {
//     console.log(
//       'Obtained Marks ',
//       students[i].obtainedMarks[j].marks,
//       ' in',
//       students[i].obtainedMarks[j].subjectName
//     );
//   }
//   console.log('Student-TotalMarks', students[i].totalMark);
// }

// sort student by their totlal marks
students.sort((a, b) => b.totalMark - a.totalMark);

for (let i = 0; i < students.length; i++) {
  let grade = calculateGrades(students[i].totalMark);
  console.log(
    `Class: ${students[i].studentClass}-${students[i].studentSection}`
  );
  console.log(
    `${i + 1}st Position: ${students[i].studentName} | Marks: ${
      students[i].totalMark
    } | Percentage: ${((students[i].totalMark / 300) * 100).toFixed(
      2
    )}% | Grade: ${grade}`
  );
}

console.log('\n');

//searching by roll no
for (let i = 0; i < students.length; i++) {
  if (students[i].studentRollNo == '1-A') {
    console.log('Roll no: ', students[i].studentRollNo);
    console.log('Name', students[i].studentName);
    console.log('Age', students[i].studentAge);
    for (let j = 0; j < students[i].obtainedMarks.length; j++) {
      console.log(
        'Obtained Marks ',
        students[i].obtainedMarks[j].marks,
        ' in',
        students[i].obtainedMarks[j].subjectName
      );
    }
  }
  console.log('Total marks', students[i].totalMark);
}
//Class#6
//1st Position:  | Marks: | Percentage: | Grade: A,B,C,D,F
//2nd Position:  | Marks: | Percentage: | Grade: A,B,C,D,F
//3rd Position:  | Marks: | Percentage: | Grade: A,B,C,D,F

// Search input RollNo ("C-6-3")
//RollNo:
//Name:
//Age:
// Subject Title | Obtain | Total
// Subject Title | Obtain | Total
