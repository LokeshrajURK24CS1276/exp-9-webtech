// Ex.9 - 1. Student Database Management

// Create CollegeDB, insert students, a. display all records, b. find by roll number
use CollegeDB
db.createCollection("students")
db.students.insertMany([
  { rollNo: 101, name: "Arun", department: "CSE", age: 20, mark: 85 },
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92 },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78 },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88 },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67 }
])
db.students.find({}, { _id: 0 })
db.students.findOne({ rollNo: 103 }, { _id: 0 })

// c. Marks above 80, d. update marks, e. delete by roll number
db.students.find({ mark: { $gt: 80 } }, { _id: 0 })
db.students.updateOne({ rollNo: 101 }, { $set: { mark: 90 } })
db.students.deleteOne({ rollNo: 105 })
db.students.find({}, { _id: 0 })
