import Product from "../models/Product.js";
import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';

export const findAllProducts = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const products = await Product.find({});
        res.json({
            // totalItems: clients.totalDocs,
            products: products,
            // totalPages: clients.totalPages,
            // currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createProduct = async(req, res) =>{
    const newProduct = new Product({name: req.body.name, brand: req.body.brand, category: req.body.category, image: req.body.image, price: req.body.price})
    const productCreated = await newProduct.save();
    res.json(productCreated);
}

// export const findOneUser = async(req, res) =>{
//     const user = await User.findById(req.params.id);
//     res.json(user);
// }

export const deleteProduct = async(req, res) =>{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Product were deleted successfully'
    });
}

// AKIAVHJK4GQ6BBLS6M62