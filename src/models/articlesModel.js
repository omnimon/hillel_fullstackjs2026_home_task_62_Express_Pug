const articles = [
  {
    id: '1',
    title: 'Getting Started with Express.js',
    author: 'Alice Johnson',
    summary: 'A short introduction to building web servers with Express.js.',
  },
  {
    id: '2',
    title: 'Understanding RESTful APIs',
    author: 'Bob Smith',
    summary: 'An overview of resources, HTTP methods, and REST API conventions.',
  },
  {
    id: '3',
    title: 'Template Engines in Node.js',
    author: 'Charlie Brown',
    summary: 'A practical look at server-side rendering with PUG and EJS.',
  },
];

export const getAllArticles = () => articles;

export const findArticleById = (articleId) =>
  articles.find((article) => article.id === articleId);
