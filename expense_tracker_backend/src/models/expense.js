//
// Expense model placeholder for expense tracker backend
//

// PUBLIC_INTERFACE
/**
 * Expense model schema placeholder.
 * 
 * In a real implementation, this could use Mongoose, Sequelize, or other ORM.
 */
class Expense {
  constructor({ id, userId, category, amount, date, description }) {
    this.id = id;
    this.userId = userId;
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }
}

module.exports = Expense;
