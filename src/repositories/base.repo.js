class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return this.model.find();
    }

    async findById(id) {
        return this.model.findById(id);
    }

    async create(data) {
        const newItem = new this.model(data);
        return newItem.save();
    }

    async update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        const result = await this.model.findByIdAndDelete(id);
        return !!result;
    }
}

module.exports = BaseRepository;
