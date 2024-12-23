import Category from "../models/category.js";
import categoryRepository from "../repositories/categoryRepository.js";

export const listCategories = (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const categories = categoryRepository.getAll();

    const start = (page - 1) * limit;
    const paginatedCategories = categories.slice(start, start + parseInt(limit));

    res.json({ total: categories.length, page, limit, data: paginatedCategories });
};

export const getCategoryById = (req, res) => {
    const { id } = req.params;

    const category = categoryRepository.getById(Number(id));

    if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada!" });
    }

    res.json(category);
};

export const createCategory = (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: "Descrição é obrigatória!" });
    }

    const newCategory = new Category(null, description);
    const addedCategory = categoryRepository.add(newCategory);
    res.status(201).json(addedCategory);
};

export const updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: "Descrição é obrigatória!" });
    }

    const updatedCategory = categoryRepository.update(id, { description });

    if (!updatedCategory) {
        return res.status(404).json({ error: "Categoria não encontrada!" });
    }

    res.json(updatedCategory);
};

export const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedCategory = categoryRepository.delete(id);

    if (!deletedCategory) {
        return res.status(404).json({ error: "Categoria não encontrada!" });
    }

    res.status(204).send();
};
