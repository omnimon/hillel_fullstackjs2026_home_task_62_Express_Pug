import {
  findArticleById,
  getAllArticles,
} from '../models/articlesModel.js';

export const getArticles = (req, res) => {
  res.render('articles/index.ejs', {
    title: 'Articles',
    articles: getAllArticles(),
  });
};

export const getArticleById = (req, res) => {
  const article = findArticleById(req.params.articleId);

  if (!article) {
    return res.status(404).type('text/plain').send('Article not found');
  }

  return res.render('articles/details.ejs', {
    title: article.title,
    article,
  });
};

export const createArticle = (req, res) => {
  res.type('text/plain').send('Post articles route');
};

export const updateArticleById = (req, res) => {
  res.type('text/plain').send(`Put article by Id route: ${req.params.articleId}`);
};

export const deleteArticleById = (req, res) => {
  res.type('text/plain').send(`Delete article by Id route: ${req.params.articleId}`);
};
