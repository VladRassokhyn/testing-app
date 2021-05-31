export class User {
    constructor({
        login = 'USER_LOGIN',
        name = 'USER_NAME',
        password = 'PASSWORD',
        isAdmin = false
    } = {}){
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