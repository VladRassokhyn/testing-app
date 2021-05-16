const testRepo = require('./test.memory.repositoy');

const getAll = () => testRepo.getAll();
const postTest = (testData) => testRepo.postTest(testData);
const getTestById = (id) => testRepo.getTestById(id);
const updateTest = (id, testData) => testRepo.updateTest(id, testData);
const removeTest = (id) => testRepo.removeTest(id);

module.exports = { getAll, postTest, getTestById, updateTest, removeTest };