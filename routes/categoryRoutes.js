import { Router } from "express";
import { getCategoryById, listCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

const router = Router();

router.get('/categories', listCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory); 

export default router;
