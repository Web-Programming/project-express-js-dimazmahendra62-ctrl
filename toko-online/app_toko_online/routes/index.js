var express = require("express");
var router = express.Router();
var mainController = require("../controllers/main");

/* GET home page. */
// router.get("/", function (req, res, next) {
//    res.render("index", {
//      title: "Toko online Sederhana",
//      products: products,
//      query: "",
//    });
// });

router.get("/search", function (req, res, next) {
  const q = req.query.q? req.query.q.toLowerCase() : "";

  let filteredProducts = products;

  if (q) {
    filteredProducts = products.filter((p) => p.name.toLowerCase().include
)}

  res.render("index", {
    title: "Toko online Sederhana", 
    products: filteredProducts,
    query: q,
  });
});

module.exports = router;
