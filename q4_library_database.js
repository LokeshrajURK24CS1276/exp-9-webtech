// Ex.9 - 4. Library Database (Photography Books)
// Database: PhotoLibraryDB

// Create the database, collection and insert the books
use PhotoLibraryDB
db.createCollection("books")
db.books.insertMany([
  { bookId: "B101", title: "Understanding Exposure", author: "Bryan Peterson", category: "Technique", price: 1200 },
  { bookId: "B102", title: "The Photographer's Eye", author: "Michael Freeman", category: "Composition", price: 1450 },
  { bookId: "B103", title: "The Lightroom Book", author: "Scott Kelby", category: "Editing", price: 1100 },
  { bookId: "B104", title: "Learning to See Creatively", author: "Bryan Peterson", category: "Composition", price: 1050 },
  { bookId: "B105", title: "The Digital Photography Book", author: "Scott Kelby", category: "Technique", price: 899 },
  { bookId: "B106", title: "Photoshop Retouching Guide", author: "Ana Mendes", category: "Editing", price: 1350 }
])

// a. Display all books written by a specified author
db.books.find({ author: "Bryan Peterson" })

// b. Find books belonging to a particular category
db.books.find({ category: "Editing" })

// c. Update the price of a book
db.books.updateOne(
  { bookId: "B103" },
  { $set: { price: 950 } }
)
db.books.findOne({ bookId: "B103" })

// d. Sort books alphabetically by title
db.books.find({}, { _id: 0, title: 1, author: 1 })
  .sort({ title: 1 })

// e. Count the number of books in the collection
db.books.countDocuments()
