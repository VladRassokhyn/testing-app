import express from 'express';
import {User} from './user.model.js';
import app from "../../app.js";
import mongodb from 'mongodb';

const router = express.Router();
const ObjectID = mongodb.ObjectID;

router.route('/').get(async (req, res) => {
    const collection = app.locals.db.collection('users');
    await collection.find({}).toArray(function (err, users) {

        if (err) return console.log(err);
        res.send(users)
    });
});

router.route('/').post(async (req, res) => {
    const collection = app.locals.db.collection('users');
    await collection.insertOne(new User({...req.body}), (err, result) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(result.ops[0]);
        }
    });
});

router.route('/:userId').get(async (req, res) => {
    const collection = app.locals.db.collection('users');
    await collection.findOne({ _id: ObjectID(req.params.userId) }, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
});

router.route('/:userId').put(async (req, res) => {
    const collection = app.locals.db.collection('users');
    await collection.updateOne({ _id: ObjectID(req.params.userId) }, {...req.body}, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
});

router.route('/:userId').delete(async (req, res) => {
    const collection = app.locals.db.collection('users');
    await collection.deleteOne({ _id: ObjectID(req.params.userId) }, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
});

export default router;
