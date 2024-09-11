const User = require('../src/models/User');

exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (err) {
    throw new Error(err.message);
  }
};