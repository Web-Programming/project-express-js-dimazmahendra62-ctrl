var products = require("../../data/product.json");

exports.index = (req, res) => {
  // ambil query string dari URL, misalnya /?q=Laptop
  const search = req.query.q || null;

  // kalau ada pencarian, filter data produk
  let filtered = products;
  if (search) {
    filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.render('index', {
    title: 'Daftar Produk',
    products: filtered,
    query: search   // ✅ kirim variabel query ke EJS
  });
};
