const {v4: uuidv4} = require('uuid');
const User = require('./user.model');

const users = [
    {
        "id": 1,
        "name": "Vlad",
        "lastName": "Moskov",
        "role": "тех. эксперт",
        "email": "vlad@gmail.com",
        "password": "1234",
        "isAdmin": true,
        "birthDay": "24.04",
        "phoneNumber": "(099) 999 99 99",
        "code": "5815",
        "finishedTests": []
    },
    {
        "id": 2,
        "name": "Вася",
        "lastName": "Пупкин",
        "role": "продавец-концультант",
        "email": "vasia@gmail.com",
        "password": "1111",
        "isAdmin": false,
        "birthDay": "21.02",
        "phoneNumber": "(099) 999 99 99",
        "code": "12061",
        "finishedTests": []
    }];

const getAll = async () => users;
const postUser = async (userData) => users.push(new User({...userData, id: uuidv4()}));
const getUserById = async (id) => users.find(u => u.id === +id);
const updateUser = async (id, userData) => {
    const user = await getUserById(id);
    const index = users.indexOf(user);
    users[index] = {...user, ...userData};
    return users[index];
};
const removeUser = async (id) => {
    const user = await getUserById(id);
    const index = users.indexOf(user);
    users.splice(index, 1);
};

module.exports = {getAll, postUser, getUserById, updateUser, removeUser};