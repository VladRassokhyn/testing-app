const router = require('express').Router();
const userService = require('./user.service');
const User = require('./user.model');

router.route('/').get(async (req, res) => {
    const users = await userService.getAll();
    res.json(users.map(user => User.toResponse(user)));
});

router.route('/').post(async (req, res) => {
    await userService.postUser(req.body);
    res.json({message: 'Success', code: res.statusCode});
});

router.route('/:userId').get(async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.json({message: 'Success', code: res.statusCode, body: User.toResponse(user)});
});

router.route('/:userId').put(async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.json({message: 'Success', code: res.statusCode, body: User.toResponse(user)});
});

router.route('/:userId').delete(async (req, res) => {
    await userService.removeUser(req.params.userId);
    res.json({message: 'Success', code: res.statusCode});
});

module.exports = router;
