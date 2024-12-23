// src/app.js
import express from "express";
import productRoutes from './routes/productRoutes.js';  
import categoryRoutes from './routes/categoryRoutes.js';  

const app = express();

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

export default app;
