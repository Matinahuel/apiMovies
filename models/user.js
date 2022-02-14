const {mongoose} = require("../config/db");

const {Schema} = mongoose;

const userSchema = new Schema({
    firtName:String,
    lastName:String,
    birthday:Date,
    city:String,
    email:String,
    password:String,
    role:Number
})

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;