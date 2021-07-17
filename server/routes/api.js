const express = require('express');

const router = express.Router();
const crudController = require('../controllers/crudController');

router.get('/all', crudController.findAllDocs, (req, res) => res.status(200).json(res.locals));
router.get('/', crudController.findDoc, (req, res) => res.status(200).json(res.locals));

router.post('/', crudController.addDoc, (req, res) => res.status(200).json(res.locals));

router.delete('/all', crudController.nuke, (req, res) => res.status(200).json(res.locals));
router.delete('/', crudController.findOneAndDelete, (req, res) => res.status(200).json(res.locals));

router.patch('/', crudController.findOneAndUpdate, (req, res) => res.status(200).json(res.locals));

module.exports = router;
