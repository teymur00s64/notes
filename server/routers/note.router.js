const express = require('express');
const { noteController } = require('../controllers');
const router = express.Router();


router.get('/', noteController.findAllByUser);

router.get('/:id', noteController.findNote);

router.post('/', noteController.createNote);

router.put('/:id', noteController.updateNote)

router.delete('/', noteController.deleteAll);

router.delete('/:id', noteController.deleteNote);

module.exports = router;