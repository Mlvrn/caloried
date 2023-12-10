const express = require('express');
const {
  register,
  login,
  verifyEmail,
  resendVerificationEmail,
} = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.post('/resend-verification', resendVerificationEmail);
router.get('/verify-email', verifyEmail);

module.exports = router;