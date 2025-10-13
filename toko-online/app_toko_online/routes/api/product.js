const express = require("express");
const router = express.router();
const productController = require("../../controllers/product");
const { route } = require("..");

//url create - POST (/api/produk)
router.post("/", productController.create);
//url read all - GET (/api/produk)
router.get("/", productController.apiall);
//url read one - detail - GET (/api/produk/ :id)
router.get("/:id", productController.detailproduk);
//url update - PUT (/api/produk/ :id)
router.put("/:id", productController.update);
//url delete - DELETE (/api/produk/ :id)
router.delete("/:id", productController.remove);

module.exports = route