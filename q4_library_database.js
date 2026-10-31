// Ex.9 - 4. Library Database (Photography Books)

// Create PhotoLibraryDB, a. books by author, b. books by category
use PhotoLibraryDB
db.books.insertMany([
  { bookId: "B101", title: "Understanding Exposure", author: "Bryan Peterson", category: "Technique", price: 1200 },
  { bookId: "B102", title: "The Photographer's Eye", author: "Michael Freeman", category: "Composition", price: 1450 },
  { bookId: "B103", title: "The Lightroom Book", author: "Scott Kelby", category: "Editing", price: 1100 },
  { bookId: "B104", title: "Learning to See Creatively", author: "Bryan Peterson", category: "Composition", price: 1050 },
  { bookId: "B105", title: "Photoshop Retouching Guide", author: "Ana Mendes", category: "Editing", price: 1350 }
])
db.books.find({ author: "Bryan Peterson" }, { _id: 0, title: 1, author: 1 })
db.books.find({ category: "Editing" }, { _id: 0, title: 1, category: 1 })

// c. Update a price, d. sort by title, e. count the books
db.books.updateOne({ bookId: "B103" }, { $set: { price: 950 } })
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ title: 1 })
db.books.countDocuments()
