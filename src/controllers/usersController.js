import { findUserById, getAllUsers } from '../models/usersModel.js';

export const getUsers = (req, res) => {
  res.render('users/index.pug', {
    title: 'Users',
    users: getAllUsers(),
  });
};

export const getUserById = (req, res) => {
  const user = findUserById(req.params.userId);

  if (!user) {
    return res.status(404).type('text/plain').send('User not found');
  }

  return res.render('users/details.pug', {
    title: `User ${user.id}`,
    user,
  });
};

export const createUser = (req, res) => {
  res.type('text/plain').send('Post users route');
};

export const updateUserById = (req, res) => {
  res.type('text/plain').send(`Put user by Id route: ${req.params.userId}`);
};

export const deleteUserById = (req, res) => {
  res.type('text/plain').send(`Delete user by Id route: ${req.params.userId}`);
};
