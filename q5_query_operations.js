// Ex.9 - 5. Query Operations on the students Collection
// Database: CollegeDB

// a. Find students whose marks are greater than or equal to 75
use CollegeDB
db.students.find({ mark: { $gte: 75 } })

// b. Find students whose age is less than 21
db.students.find({ age: { $lt: 21 } })

// c. Retrieve students belonging to either CSE or IT
db.students.find({
  department: { $in: ["CSE", "IT"] }
})

// d. Display the top three students based on marks
db.students.find()
  .sort({ mark: -1 })
  .limit(3)

// e. Update multiple student records using updateMany()
db.students.updateMany(
  { department: "CSE" },
  { $inc: { mark: 5 } }
)
db.students.find(
  { department: "CSE" },
  { _id: 0, rollNo: 1, name: 1, mark: 1 }
)
