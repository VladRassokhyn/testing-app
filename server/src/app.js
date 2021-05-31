import express from 'express';
import bodyParser from 'body-parser';
import testRouter from './resourses/tests/test.router.js';
import userRouter from './resourses/users/user.router.js';
import cors from 'cors';
import MongoClient from "mongodb";
import {db} from "./db.js";

const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
}

const app = express();

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Running');
        return;
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);

    app.locals.db = client.db("testingAppDB");
    app.use('/tests', cors(corsOptions), testRouter);
    app.use('/users', cors(corsOptions), userRouter);
    app.listen(3001, () => console.log('listen at http://localhost:4000'));
    app.listen(3001, '172.17.0.245', () => console.log('listen at http://172.17.0.245'));
})

export default app;