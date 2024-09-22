import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 200
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    // quantity: {
    //     type: Number,
    //     required: true,
    //     min: 0
    // },
    // category: {
    //     type: String,
    //     required: true,
    //     enum: ["Electronics", "Clothing", "Books"]
    // },
    image: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;