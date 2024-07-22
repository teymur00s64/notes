const root = require('express');
const { authController } = require('../controllers');

const router = root.Router()

router.post('/login', authController.signIn)

module.exports = router;