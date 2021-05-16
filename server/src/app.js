const express = require('express');
const testRouter = require('./resourses/tests/test.router');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
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

module.exports = app;