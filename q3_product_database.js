// Ex.9 - 3. Product Database (LensArt Store)
// Database: ProductDB

// Create the database, collection and insert the products
use ProductDB
db.createCollection("products")
db.products.insertMany([
  { productId: "P101", name: "8x10 Photo Print", category: "Prints", price: 90, stock: 250 },
  { productId: "P102", name: "Canvas Print 16x20", category: "Prints", price: 1800, stock: 12 },
  { productId: "P103", name: "Lightroom Preset Pack", category: "Digital", price: 799, stock: 999 },
  { productId: "P104", name: "Premium Photo Album", category: "Prints", price: 1450, stock: 8 },
  { productId: "P105", name: "Camera Tripod", category: "Accessories", price: 2600, stock: 0 },
  { productId: "P106", name: "LED Ring Light", category: "Accessories", price: 1999, stock: 15 },
  { productId: "P107", name: "64GB Memory Card", category: "Accessories", price: 650, stock: 0 },
  { productId: "P108", name: "Wedding Retouch Bundle", category: "Digital", price: 4999, stock: 50 }
])

// a. Retrieve products belonging to the Prints category
db.products.find({ category: "Prints" })

// b. Find products priced between Rs.500 and Rs.2,000
db.products.find({
  price: { $gte: 500, $lte: 2000 }
})

// c. Increase the stock quantity of a product
db.products.updateOne(
  { productId: "P104" },
  { $inc: { stock: 20 } }
)
db.products.findOne({ productId: "P104" })

// d. Delete products whose stock quantity is zero
db.products.deleteMany({ stock: 0 })

// e. Display the five most expensive products
db.products.find()
  .sort({ price: -1 })
  .limit(5)
