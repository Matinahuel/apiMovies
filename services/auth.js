const Users = require("./users");

class Auth {

    constructor() {
        this.users = new Users()
    }

    async login(email, password) {
        const user = await this.users.getByEmail(email);
        console.log(user)
        if (user & user.password === password) {
            user.password = undefined
            user.__V = undefined
            return { success: true, user }
        }
        return { success: false, mesagge: "Las credenciales no coinciden" }
    }
    async signup(data){
        if(await this.users.getByEmail(data.email)){
            return {succes:false, mesagge:"Usuario ya registrado"}
        }else{
            const user = await this.users.create(data)
            return {succes:true,user}
        }
    }

}


module.exports = Auth;