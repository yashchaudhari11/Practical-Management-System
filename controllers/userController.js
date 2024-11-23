const User = require('../models/User');

exports.createUser = async (req, res) => {
    console.log(req.body); // Log the request body
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  

exports.getUsers = async (req, res) => {
  // Admin-only logic can be added here
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getRoleUsers = async (req, res) => {
  const role = req.params.role;
  try {
    const users = await User.find({ role });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
