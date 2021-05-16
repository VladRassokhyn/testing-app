const { v4: uuidv4 } = require('uuid');

class User {
    constructor({
        id = uuidv4(),
        login = 'USER_LOGIN',
        name = 'USER_NAME',
        password = 'PASSWORD',
        isAdmin = false
    } = {}){
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.isAdmin = isAdmin;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}

module.exports = User