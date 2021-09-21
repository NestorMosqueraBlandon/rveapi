import Product from '../models/Product.js';
import getPagination from '../libs/getPagination.js';
import { generateToken } from '../libs/utils.js';

export const findAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    console.log(allProducts.length);
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size, allProducts.length);

    const products = await Product.paginate({}, { offset, limit });
    res.json({
      totalItems: products.totalDocs,
      products: products.docs,
      totalPages: products.totalPages,
      currentPage: products.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    brand: req.body.brand,
    category: req.body.category,
    image: req.body.image,
    price: req.body.price,
  });
  const productCreated = await newProduct.save();
  res.json(productCreated);
};

export const findOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.json({
    message: 'Product were deleted successfully',
  });
};

// AKIAVHJK4GQ6BBLS6M62
