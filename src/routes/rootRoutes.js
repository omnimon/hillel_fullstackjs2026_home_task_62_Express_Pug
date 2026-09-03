import { Router } from 'express';
import { getRoot } from '../controllers/rootController.js';
import { logRequests } from '../middlewares/loggingMiddleware.js';

const router = Router();

router.get('/', logRequests, getRoot);

export default router;
