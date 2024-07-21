const express = require('express');
const userRouter = require('./user');
const authRouter = require('./auth')
const noteRouter = require('./note')
const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/notes', noteRouter);

module.exports = router;