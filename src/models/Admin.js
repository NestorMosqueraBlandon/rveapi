import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        trim: true,
        default: "./img/ceo.png"
    },
}, {
    versionKey: false,
    timestamps: true
});

adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;