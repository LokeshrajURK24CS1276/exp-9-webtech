// Ex.9 - 1. Student Database Management
// Database: CollegeDB

// Create the database and the students collection
use CollegeDB
db.createCollection("students")
show collections

// Insert six student records
db.students.insertMany([
  { rollNo: 101, name: "Arun", department: "CSE", age: 20, mark: 85 },
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92 },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78 },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88 },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67 },
  { rollNo: 106, name: "Meena", department: "IT", age: 20, mark: 74 }
])

// a. Display all student records
db.students.find()

// b. Retrieve the details of a student using the roll number
db.students.findOne({ rollNo: 103 })

// c. Display students who scored more than 80 marks
db.students.find({ mark: { $gt: 80 } })

// d. Update the marks of a particular student
db.students.updateOne(
  { rollNo: 101 },
  { $set: { mark: 90 } }
)
db.students.findOne({ rollNo: 101 })

// e. Delete a student record using the roll number
db.students.deleteOne({ rollNo: 105 })
db.students.countDocuments()
