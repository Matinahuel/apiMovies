const UserModel = require("../models/user")
class Users {
    async getAll() {
        return await UserModel.find()

    };
    async get(id) {
          return await UserModel.findById(id)
    };
    async getByEmail(email) {
        const user = await user.findOne({email,email})
        return user
    }
    async create(data) {
          return await UserModel.findById(data)
    };
    async update(id, data) {
        return await UserModel.findByIdAndUpdate(id, data,{new:true})
        

    };
    async delete(id, data) {
        return await UserModel.findByIdAndDelete(id)
        
    }

}

module.exports = Users;