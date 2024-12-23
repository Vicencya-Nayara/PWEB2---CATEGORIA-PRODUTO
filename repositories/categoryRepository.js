import Category from "../models/category.js";

class CategoryRepository {
    constructor() {
        this.categories = [
            new Category(1, "Electronics"),
            new Category(2, "Kitchen"),
            new Category(3, "Stationery"),
            new Category(4, "Furniture"),
        ];
    }

    getAll() {
        return this.categories;
    }

    getById(id) {
        return this.categories.find(category => category.getId() === id);
    }

    add(category) {
        const id = this.categories.length + 1;
        category.setId(id);
        this.categories.push(category);
        return category;
    }

    update(id, updateData) {
        const category = this.getById(id);
        if (!category) return null;

        if (updateData.description) {
            category.setDescription(updateData.description);
        }

        return category;
    }

    delete(id) {
        const index = this.categories.findIndex(category => category.getId() === id);
        if (index === -1) return null;

        return this.categories.splice(index, 1)[0];
    }
}

export default new CategoryRepository();