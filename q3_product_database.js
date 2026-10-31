// Ex.9 - 3. Product Database (LensArt Store)

// Create ProductDB, a. products by category, b. price between Rs.500 and Rs.2,000
use ProductDB
db.products.insertMany([
  { productId: "P101", name: "8x10 Photo Print", category: "Prints", price: 90, stock: 250 },
  { productId: "P102", name: "Canvas Print", category: "Prints", price: 1800, stock: 12 },
  { productId: "P103", name: "Preset Pack", category: "Digital", price: 799, stock: 999 },
  { productId: "P104", name: "Photo Album", category: "Prints", price: 1450, stock: 8 },
  { productId: "P105", name: "Camera Tripod", category: "Accessories", price: 2600, stock: 0 },
  { productId: "P106", name: "LED Ring Light", category: "Accessories", price: 1999, stock: 15 },
  { productId: "P107", name: "Retouch Bundle", category: "Digital", price: 4999, stock: 50 }
])
db.products.find({ category: "Prints" }, { _id: 0, name: 1, category: 1, price: 1 })
db.products.find({ price: { $gte: 500, $lte: 2000 } }, { _id: 0, name: 1, price: 1 })

// c. Increase stock, d. delete zero-stock products, e. five most expensive
db.products.updateOne({ productId: "P104" }, { $inc: { stock: 20 } })
db.products.findOne({ productId: "P104" }, { _id: 0, name: 1, stock: 1 })
db.products.deleteMany({ stock: 0 })
db.products.find({}, { _id: 0, name: 1, price: 1 }).sort({ price: -1 }).limit(5)
