const express = require('express');
const router = express.Router();
const {createTransactionControl,
  getAllTransactionControl,
  getTransactionIdControl } = require('../../controllers/controllerTransaction')

router.post('/createTransaction', createTransactionControl)
router.get('/', getAllTransactionControl)
router.get('/:transactionId', getTransactionIdControl)

module.exports = router;