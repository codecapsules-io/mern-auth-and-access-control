 
const express = require('express');
const { register, login, getUser } = require('../controllers/authController');
const { auth, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', auth, getUser);
router.get('/admin', auth, admin, (req, res) => {
    res.send('Admin content');
});

module.exports = router;