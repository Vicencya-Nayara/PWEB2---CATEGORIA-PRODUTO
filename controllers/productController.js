import productRepository from '../repositories/productRepository.js'; 
export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = productRepository.getById(Number(id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found!' });
    }

    res.json(product);
};


export const listProducts = (req, res) => {
    const {category, page = 1, limit = 10} = req.query;

    let products = productRepository.getAll();

    if (category) {
        products = products.filter(product => 
            product.getCategory().toLowerCase() === category.toLowerCase());
    }

    const start = (page - 1) * limit;
    const paginatedProducts = products.slice(start, start + parseInt(limit));

    res.json({ total: products.length, page, limit, data: paginatedProducts });
};


export const createProduct = (req, res) => {
    const { name, category, price } = req.body;

    if (!name || !category || !price) {
        return res.status(400).json({ error: 'Nome, categoria e preço são obrigatórios!'})
    }

    const newProduct = new Product(null, name, category, price);
    const addedProduct = productRepository.add(newProduct);
    res.status(201).json(addedProduct);
};

export const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, category, price } = req.body;

    const updateProduct = productRepository.update(id, { name, category, price });

    if (!updateProduct) {
        return res.status(404).json({ error: 'Produto não encontrado!'});
    }

    res.json(updateProduct);
};

export const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const deleteProduct = productRepository.delete(id);

    if (!deleteProduct) {
        return res.status(404).json({ error: 'Produto não encontrado!'});
    }

    res.status(204).send();
};
