class Product {
    constructor(id, name, category, price) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
    }

    // Id
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    // Name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    // Category
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }

    // Price
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}

export default Product;