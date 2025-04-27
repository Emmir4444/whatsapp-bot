const express = require('express');
const router = express.Router();
const whatsAppController = require('../controllers/WhatsappControllers');

router
.get('/', whatsAppController.VerifiToken)
.post('/', whatsAppController.ReceivedMessage)

module.exports = router;