import Product from "../models/product.js";

class ProductRepository {
    constructor() {
        this.products = [
            new Product(1, 'Smartphone', 'Eletrônicos', 1000),
            new Product(2, 'Caixa de Som Bluetooth', 'Eletrônicos', 150),
            new Product(3, 'Garrafa de Água', 'Cozinha', 20),
            new Product(4, 'Caneta', 'Papelaria', 2),
        ];
    }

    getAll() {
        return this.products;
    }

    getById(id) {
        return this.products.find(product => product.id === id);
    }

    add(product) {
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
        product.id = id;
        this.products.push(product);
        return product;
    }

    update(id, updateData) {
        const product = this.getById(id);
        if (!product) return null;

        if (updateData.name) product.name = updateData.name;
        if (updateData.category) product.category = updateData.category;
        if (updateData.price) product.price = updateData.price;

        return product;
    }

    delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;

        return this.products.splice(index, 1)[0];
    }
}

export default new ProductRepository();
