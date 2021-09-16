import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const computerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specs: [
      {
        cpu: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        motherboard: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        ram: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        ssd: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        hdd: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        powersupply: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        case: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: './img/default.png',
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

computerSchema.plugin(mongoosePaginate);
const Computer = mongoose.model('Computer', computerSchema);
export default Computer;
