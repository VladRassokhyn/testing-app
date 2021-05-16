const router = require('express').Router();
const taskService = require('./test.service');

router.route('/').get(async (req, res) => {
    const tests = await taskService.getAll();
    res.json(tests);
});

router.route('/').post(async (req, res) => {
    await taskService.postTest(req.body);
    res.json({message: 'Success', code: res.statusCode});
});

router.route('/:testId').get(async (req, res) => {
    const test = await taskService.getTestById(req.params.testId);
    res.json({message: 'Success', code: res.statusCode, body: test});
});

router.route('/:testId').put(async (req, res) => {
    await taskService.updateTest(req.params.testId, req.body);
});

router.route('/:testId').delete(async (req, res) => {
    await taskService.removeTest(req.params.testId);
    res.json({message: 'Success', code: res.statusCode});
});

module.exports = router;
