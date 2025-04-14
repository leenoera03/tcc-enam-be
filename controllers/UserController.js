import User from "../models/UserModel.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// GET user by ID
export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

// CREATE user
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to create user" });
  }
};

// UPDATE user
export const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "User not found to update" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to update user" });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "User not found to delete" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
