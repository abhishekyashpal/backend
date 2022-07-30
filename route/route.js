const express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUser', userController.getAllUser);
router.get('/getUser/:id', userController.getUserById);
router.get('/createUser', userController.createUser);
router.get('/updateUser/:id', userController.updateUser);
router.get('/deleteUser/:id', userController.deleteUser);

module.exports = router;
