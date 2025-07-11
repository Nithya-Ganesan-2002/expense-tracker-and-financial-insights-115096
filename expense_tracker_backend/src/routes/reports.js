const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

/**
 * @swagger
 * /reports/summary:
 *   get:
 *     summary: Get spending summary report
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Spending summary returned
 */
router.get('/summary', reportController.getSpendingSummary.bind(reportController));

/**
 * @swagger
 * /reports/category-breakdown:
 *   get:
 *     summary: Get spending by category breakdown
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Category breakdown returned
 */
router.get('/category-breakdown', reportController.getCategoryBreakdown.bind(reportController));

module.exports = router;
