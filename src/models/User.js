import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', userSchema);
export default User;