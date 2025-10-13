// var products = require("../data product.json");
const Product = require("../models/products");
// var products = require("../models/products");
const index = async (req, res) => {
  try {
    const prod = await products.find({});
    res.render("index", {
      title: "Toko online sederhana",
      products: prod,
    });
  } catch (err) {
    res.status(500).send("gagal memuat produk");
  }
};

const detail = async (req, res) => {
 try {
     const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Produk tidak tersedia");
  }

  res.render("product-detail", {
    title: product.name,
    product: product,
  });
 }   catch (err) {
    res.status(500).send("gagal memuat produk");
  }
};



//CRUD controller
//membuat rest api
const all = async (req, res) => {

};


//read one /detail product
const detailProduk = async (req, res) => {
try{
  const productId = req.params.id;
  const product = await Product.findById(products);

  if(!product) {
    return res.status(404).json({
      status: false,
      message: "Produk tidak ditemukan",
      data:product
    });
  }
  res.status(200).json({
    status:true,
    message: "Detail produk berhasil diambil",
    data:product
  });

}catch (err) {
  res.status(500).json({
    status: false,
    message: "Gagal memuat detail produk"
  });
}

};

//update data
const remove = async (req, res) => {
  try{
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true, //mengembalikan dokumen tg telah diupdate
          runValidators: true //menajalankan validasi schemaaq`saat update
      });

      if(!product){
        res.status(404).json({
          status:false, message: "Produk tidak ditemukan",
        });
      }
      // kirim respon sukses ke user
    res.status(200).json({
      status: true, message: "Produk berhasil diupdate", data: product
    });
 }catch(err){
    if(err.name === 'CastError'){
      res.status(400).json({
          status: false, message: "Format ID tidak valid"
      });
  }else if(err.name === 'ValidationError'){
        res.status(400).json({
          status: false, message: err.message
        });
  }else{
    res.status(500).json({
      status: false, message: 'Internal server error'
    });
  }

}}

//create/insert Data
const create = async (req, res) => {
  try{
    //1. ambil data dari request body
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock || 0
    })
    //2. simpan data ke mongo db melalui model product
    const product = await newProduct.save();

    //3. kirim respon sukses ke user
    res.status(200).json({
      status: true,
      message: "Produk berhasil disimpan",
      data: product
    })

  }catch(err){
    if(err.name === 'ValidationError'){
      res.status(400).json({
          status: false,
          message: err.message
      });
        res.status(500).json({
          status: false,
          message: "Internal server error"
        });
    }
}}


module.exports = {
  index, detail,
  all, create,
  detailProduk,

}
