class Category {
    constructor(id, description) {
        this._id = id;
        this._description = description;
    }

    // Id
    getId() {
        return this._id;
    }
    setId(value) {
        this._id = value;
    }

    // Description
    getDescription() {
        return this._description;
    }
    setDescription(value) {
        this._description = value;
    }
}

export default Category;