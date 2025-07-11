const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: User signup endpoint
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: Account created
 */
router.post('/signup', authController.signup.bind(authController));

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login endpoint
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', authController.login.bind(authController));

module.exports = router;
