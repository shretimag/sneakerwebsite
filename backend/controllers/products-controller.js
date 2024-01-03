const Shoes = require('../models/products');
const HttpError = require('../utils/Http-Error');

const allProducts = async (req, res, next) => {
  let products
  try {
    products = await Shoes.find();
  }
  catch (err) {
    console.log(err);
    return next(new HttpError('could not found Shoes', 404));
  }
  console.log(products);
  res.json(products);
}

const productById = async (req, res, next) => {
  const id = req.params.pid;
  let shoe;
  try {
    shoe = await Shoes.findById(id);
  }
  catch (err) {
    return next(new HttpError('Can not find particular shoes', 404));
  }

  if (!shoe) {
    return next(new HttpError('can not find particular sneakers', 404));
  }
  console.log(shoe);
  res.json(shoe);
}

exports.allProducts = allProducts;
exports.productById = productById;