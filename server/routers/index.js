const express = require('express');
const userRouter = require('./user.router');
const authRouter = require('./auth.router')
const noteRouter = require('./note.router');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/notes', authMiddleware, noteRouter);

module.exports = router;