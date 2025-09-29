var product = require('../../data/product.json');

const index =  (req, res) => {
    res.render('index', { 
        title: 'Toko Online',
        products: products
});
};

module.exports = { index };

// var products = require("../data/product.json");

// exports.index = function(req, res) {
//   res.render("index", {
//     title: "Toko Online",
//     products: products
//   });
// };

// exports.search = function(req, res) {
//   let q = req.query.q ? req.query.q.toLowerCase() : "";

//   // Filter produk berdasarkan nama yang mengandung query
//   let results = products.filter(p => 
//     p.name.toLowerCase().includes(q)
//   );

//   res.render("search-result", {
//     title: "Hasil Pencarian",
//     products: results,
//     keyword: q
//   });
// };
