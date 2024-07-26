const express = require('express');
const router = express.Router();
const {createAccountController,
  getAllAccountController,
  getAccountIdController,
  createTypeAccount,
  getTypeAccountControl
} = require('../../controllers/controllerAccount')

router.post('/createAccount', createAccountController);
router.get('/', getAllAccountController);
router.get('/:accountId', getAccountIdController)

// create account_type
router.post('/create', createTypeAccount);
router.get('/type', getTypeAccountControl)

module.exports = router;