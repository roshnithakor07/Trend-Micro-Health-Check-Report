'use strict';

const express = require("express");
const router = express.Router();

const { register, sign_in, loginRequired, logout } = require('../controllers/authController')


router.post("/register", register)
router.post("/login", sign_in)
router.post("/loginRequired", loginRequired)
router.get("/logout",logout)

module.exports = router;