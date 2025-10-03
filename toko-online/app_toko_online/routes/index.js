// var express = require('express');
// var router = express.Router();
// var products = require("../../data/product.json");

// // GET /
// router.get('/', function(req, res, next) {
//   const search = req.query.q || null;

//   let filtered = products;
//   if (search) {
//     filtered = products.filter(p =>
//       p.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   res.render('index', { 
//     title: 'Daftar Produk',
//     products: filtered,
//     query: search   // ✅ selalu dikirim, biar tidak undefined
//   });
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var products = require("../../data/product.json");

// GET /
router.get('/', function(req, res, next) {
  const query = req.query.q || null;   // ✅ ambil dari query param, default null

  res.render('index', { 
    title: 'Daftar Produk',
    products: products,
    query: query   // ✅ selalu kirim ke EJS
  });
});

module.exports = router;

