// Ex.9 - 5. Query Operations on the students Collection

// a. Marks >= 75, b. age < 21, c. CSE or IT
use CollegeDB
db.students.find({ mark: { $gte: 75 } }, { _id: 0 })
db.students.find({ age: { $lt: 21 } }, { _id: 0 })
db.students.find({ department: { $in: ["CSE", "IT"] } }, { _id: 0 })

// d. Top three students, e. updateMany()
db.students.find({}, { _id: 0 }).sort({ mark: -1 }).limit(3)
db.students.updateMany({ department: "CSE" }, { $inc: { mark: 5 } })
db.students.find({ department: "CSE" }, { _id: 0 })
