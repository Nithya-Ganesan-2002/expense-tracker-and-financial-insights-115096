const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     responses:
 *       201:
 *         description: Expense created
 */
router.post('/', expenseController.createExpense.bind(expenseController));

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: Expenses list returned
 */
router.get('/', expenseController.getExpenses.bind(expenseController));

/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Update an expense
 *     tags: [Expenses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense updated
 */
router.put('/:id', expenseController.updateExpense.bind(expenseController));

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags: [Expenses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense deleted
 */
router.delete('/:id', expenseController.deleteExpense.bind(expenseController));

module.exports = router;
