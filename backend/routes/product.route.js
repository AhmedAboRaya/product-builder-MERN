import express from 'express';
import mongoose from 'mongoose';
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/products.controller.js';

const router = express.Router();

router.post("/", createProduct);

router.get('/', getAllProducts);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;