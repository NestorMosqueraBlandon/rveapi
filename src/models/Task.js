import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new mongoose.Schema({
    priority:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    peoples:[
        {
            people:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Admin'
            },
        }
    ],
    files:[
        {
            file:{
                type: String,
                default: "./img/default.png"
            },
        }
    ]
}, {
    versionKey: false,
    timestamps: true
});

taskSchema.plugin(mongoosePaginate);
const Task = mongoose.model('Task', taskSchema);
export default Task;