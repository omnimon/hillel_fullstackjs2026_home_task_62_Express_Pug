import { Router } from 'express';
import {
  createArticle,
  deleteArticleById,
  getArticleById,
  getArticles,
  updateArticleById,
} from '../controllers/articlesController.js';

const router = Router();

router.get('/', getArticles);
router.post('/', createArticle);

router.get('/:articleId', getArticleById);
router.put('/:articleId', updateArticleById);
router.delete('/:articleId', deleteArticleById);

export default router;
