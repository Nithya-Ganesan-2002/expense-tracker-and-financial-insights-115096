//
// User model placeholder for expense tracker backend
//

// PUBLIC_INTERFACE
/**
 * User model schema placeholder.
 * 
 * In a real implementation, this could use Mongoose, Sequelize, or other ORM.
 */
class User {
  constructor({ id, username, email, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password; // hashed!
  }
}

module.exports = User;
