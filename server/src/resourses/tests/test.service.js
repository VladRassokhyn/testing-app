import testRepo from './test.memory.repositoy.js';

const getAll = () => testRepo.getAll();
const postTest = (testData) => testRepo.postTest(testData);
const getTestById = (id) => testRepo.getTestById(id);
const updateTest = (id, testData) => testRepo.updateTest(id, testData);
const removeTest = (id) => testRepo.removeTest(id);

export default { getAll, postTest, getTestById, updateTest, removeTest };