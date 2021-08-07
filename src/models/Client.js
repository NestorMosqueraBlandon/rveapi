import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const clientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    source:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

clientSchema.plugin(mongoosePaginate);
const Client = mongoose.model('Client', clientSchema);
export default Client;