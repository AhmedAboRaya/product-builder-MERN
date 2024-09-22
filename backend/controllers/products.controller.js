import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
    const product = req.body; // data in body

    if( !product.name || !product.image || !product.price || !product.description){
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    // const newProduct = new Product(product.name, product.image, product.price, product,description);
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct})
    } catch (error) {
        console.error("Error saving product: ", error.message);
        res.status(400).json({ success: false, message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id);
        if(!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, data: product});
        
    } catch (error) {
        console.error("Error deleting product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, data: products });
    } catch (error) {
        console.error("Error fetching products: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = req.body;
        const product = await Product.findByIdAndUpdate(id, updatedProduct, {new: true});
        if(!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.json({ success: true, data: product });
    } catch (error) {
        console.error("Error updating product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" }); 
    }
}