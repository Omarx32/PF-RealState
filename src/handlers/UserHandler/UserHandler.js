const { createUser } = require('../../controllers/Users/Users');

const createUserHandler = async (req, res) => {
  await createUser(req, res);
};

module.exports = {
  createUserHandler,
};
