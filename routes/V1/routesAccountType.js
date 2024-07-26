const express = require('express');
const router = express.Router();
const {createTypeAccount,
  getTypeAccountControl
} = require('../../controllers/controllerAccount')

router.post('/create', createTypeAccount);
router.get('/type', getTypeAccountControl)

module.exports = router;