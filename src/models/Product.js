import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Category,
        ref: 'Category',
    },
    image:{
        type: String,
        trim: true,
        default: "./img/default.png"
    },
    price:{
        type: Number,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);
export default Product;