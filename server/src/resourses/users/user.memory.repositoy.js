const { v4: uuidv4 } = require('uuid');
const User = require('./user.model');

const users = [];

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

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };