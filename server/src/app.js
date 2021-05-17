const express = require('express');
const testRouter = require('./resourses/tests/test.router');
const userRouter = require('./resourses/users/user.router');
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://172.17.142.80:3000'],
    optionsSuccessStatus: 200
}

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Running');
        return;
    }
    next();
})

app.use('/tests', cors(corsOptions), testRouter);
app.use('/users', cors(corsOptions), userRouter);

module.exports = app;