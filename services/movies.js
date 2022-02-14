const MovieModel = require("../models/movie")
const movies = require("../routers/movies")
class Movies {
    async get(id) {
        return await MovieModel.findById(id)
    }
    async getAll() {
        return await MovieModel.find()

    }
    async create(data) {
        return await MovieModel.create(data)

    }
    async update(id, data) {
        const movie = await MovieModel.findByIdAndUpdate(id, data,{new:true})
        return movie

    }
    async delete(id, data) {
        const movie = await MovieModel.findByIdAndDelete(id, data)
        return movie
    }
}


module.exports = Movies