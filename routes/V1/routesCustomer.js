const express = require('express');
const router = express.Router();
const { 
  createUserController, 
  getAllUsersController,
  getUserbyIdController } = require('../../controllers/controllerCustomer')

router.post('/createCustomer', createUserController);
router.get('/', getAllUsersController);
router.get('/:userId', getUserbyIdController)


module.exports = router;