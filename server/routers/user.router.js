const express = require('express');
const { userController } = require('../controllers');
const { validationMiddleware } = require("../middlewares/validation.middleware");
const { authSchema } = require("../schemas");

const router = express.Router();

router.get('/', validationMiddleware(authSchema.login), userController.findAll);

router.post('/', userController.createUser);

module.exports = router;