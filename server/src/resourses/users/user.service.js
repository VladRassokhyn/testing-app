import userRepo from './user.memory.repositoy.js';

const getAll = async () => {
    const users = await userRepo.getAll();
    console.log(users);
    return users;
}
const postUser = (userData) => userRepo.postUser(userData);
const getUserById = (id) => userRepo.getUserById(id);
const updateUser = (id, userData) => userRepo.updateUser(id, userData);
const removeUser = (id) => userRepo.removeUser(id);

export default { getAll, postUser, getUserById, updateUser, removeUser };