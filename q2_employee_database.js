// Ex.9 - 2. Employee Database (LensArt Studio Staff)

// Create EmployeeDB, a. display all employees, b. salary above Rs.40,000
use EmployeeDB
db.employees.insertMany([
  { empId: "E101", name: "Karthik", department: "Editing", salary: 42000, experience: 4 },
  { empId: "E102", name: "Anitha", department: "Photography", salary: 55000, experience: 7 },
  { empId: "E103", name: "Rahul", department: "Editing", salary: 38000, experience: 2 },
  { empId: "E104", name: "Sneha", department: "Retouching", salary: 47000, experience: 5 },
  { empId: "E105", name: "Vignesh", department: "Sales", salary: 32000, experience: 1 }
])
db.employees.find({}, { _id: 0 })
db.employees.find({ salary: { $gt: 40000 } }, { _id: 0, name: 1, salary: 1 })

// c. Update a salary, d. sort by salary (descending), e. count by department
db.employees.updateOne({ empId: "E103" }, { $set: { salary: 41000 } })
db.employees.findOne({ empId: "E103" }, { _id: 0, name: 1, salary: 1 })
db.employees.find({}, { _id: 0, name: 1, salary: 1 }).sort({ salary: -1 })
db.employees.countDocuments({ department: "Editing" })
