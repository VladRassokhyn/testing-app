const userRepo = require('./user.memory.repositoy');

const getAll = () => userRepo.getAll();
const postUser = (userData) => userRepo.postUser(userData);
const getUserById = (id) => userRepo.getUserById(id);
const updateUser = (id, userData) => userRepo.updateUser(id, userData);
const removeUser = (id) => userRepo.removeUser(id);

module.exports = { getAll, postUser, getUserById, updateUser, removeUser };