import { Router } from 'express';
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from '../controllers/usersController.js';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

router.get('/:userId', getUserById);
router.put('/:userId', updateUserById);
router.delete('/:userId', deleteUserById);

export default router;
