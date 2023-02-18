const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const fileUploader = require('../middlewares/cloudinary.middleware');
const { checkFields } = require('../middlewares/auth-guard');

router.get('/profile', (req, res, next) => {

    res.render('user/profile', { user: req.session.currentUser })
})


module.exports = router;
