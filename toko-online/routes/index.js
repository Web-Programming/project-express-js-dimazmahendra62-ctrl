// var express = require('express');
// var router = express.Router();
// var products = require('../data/product.json')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { 
//      title: 'Toko Online',
//      products: products
//     });
// });

// module.exports = router;

var express = router('express');
var router = express.Router();

// Contoh data produk
let products = [
  { id: 1, name: "Laptop Gaming", price: 15000000 },
  { id: 2, name: "Mouse Wireless", price: 200000 },
  { id: 3, name: "Keyboard Mechanical", price: 500000 },
  { id: 4, name: "Headset Gaming", price: 750000 },
  { id: 5, name: "Monitor 24 inch", price: 2000000 },
];

// Route utama
router.get('/', function(req, res, next) {
  res.render('index', { products: products, query: null });
});

// Route search
router.get('/search', function(req, res, next) {
  let q = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredProducts;

  if (q === "") {
    // Jika query kosong tampilkan semua produk
    filteredProducts = products;
  } else {
    // Filter case-insecsitive
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }
  
  res.render('index', { products: filteredProducts, query: q });
});

module.exports = router;



