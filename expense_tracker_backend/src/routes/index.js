const express = require('express');
const healthController = require('../controllers/health');

const authRoutes = require('./auth');
const expenseRoutes = require('./expenses');
const reportRoutes = require('./reports');

const router = express.Router();
// Health endpoint

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

// Expense tracker routes
router.use('/auth', authRoutes);
router.use('/expenses', expenseRoutes);
router.use('/reports', reportRoutes);

module.exports = router;
