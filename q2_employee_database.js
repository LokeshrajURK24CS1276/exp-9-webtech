// Ex.9 - 2. Employee Database (LensArt Studio Staff)
// Database: EmployeeDB

// Create the database, collection and insert five employees
use EmployeeDB
db.createCollection("employees")
db.employees.insertMany([
  { empId: "E101", name: "Karthik", department: "Editing", salary: 42000, experience: 4 },
  { empId: "E102", name: "Anitha", department: "Photography", salary: 55000, experience: 7 },
  { empId: "E103", name: "Rahul", department: "Editing", salary: 38000, experience: 2 },
  { empId: "E104", name: "Sneha", department: "Retouching", salary: 47000, experience: 5 },
  { empId: "E105", name: "Vignesh", department: "Sales", salary: 32000, experience: 1 }
])

// a. Display all employees
db.employees.find()

// b. Find employees earning more than Rs.40,000
db.employees.find({ salary: { $gt: 40000 } })

// c. Update the salary of an employee
db.employees.updateOne(
  { empId: "E103" },
  { $set: { salary: 41000 } }
)
db.employees.findOne({ empId: "E103" })

// d. Display employees in descending order of salary
db.employees.find().sort({ salary: -1 })

// e. Count the employees in the Editing department
db.employees.countDocuments({ department: "Editing" })
