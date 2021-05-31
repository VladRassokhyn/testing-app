import { User } from './user.model.js';
import app from "../../app.js";

const users = [];

const getAll = () => {

}

const postUser = async (userData) => users.push(new User({...userData}));

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

export default {getAll, postUser, getUserById, updateUser, removeUser};