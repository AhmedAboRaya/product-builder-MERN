import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/product.route.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", router);



app.listen(5000, () => {
    connectDB();
    console.log("Server starting...");
}); 

// AluQounJkpcOoCh5