import { model, Schema } from "mongoose";


const productModel = new Schema({
    name: {
        type: String,
        required: [true, "Please entered product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true })

const Product = model('products', productModel)
export default Product