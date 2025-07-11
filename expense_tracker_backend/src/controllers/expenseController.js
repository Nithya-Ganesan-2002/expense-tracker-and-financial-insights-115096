//
// ExpenseController placeholder for expense tracker backend
//

// PUBLIC_INTERFACE
/**
 * Manages CRUD operations for expenses.
 */
class ExpenseController {
  // PUBLIC_INTERFACE
  async createExpense(req, res) {
    // TODO: Implement create logic
    res.status(201).json({ message: 'Create expense endpoint placeholder' });
  }

  // PUBLIC_INTERFACE
  async getExpenses(req, res) {
    // TODO: Implement get logic
    res.status(200).json({ message: 'Get expenses endpoint placeholder', expenses: [] });
  }

  // PUBLIC_INTERFACE
  async updateExpense(req, res) {
    // TODO: Implement update logic
    res.status(200).json({ message: 'Update expense endpoint placeholder' });
  }

  // PUBLIC_INTERFACE
  async deleteExpense(req, res) {
    // TODO: Implement delete logic
    res.status(200).json({ message: 'Delete expense endpoint placeholder' });
  }
}

module.exports = new ExpenseController();
