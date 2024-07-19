const express = require('express');
const handler = require('./handler');

const router = express.Router();

router.post('/validate', handler.validateData);
router.post('/door-status', handler.handleDoorStatus);

module.exports = router;
