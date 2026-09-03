import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ejs from 'ejs';
import express from 'express';
import pug from 'pug';
import articlesRoutes from './routes/articlesRoutes.js';
import rootRoutes from './routes/rootRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import {
  errorHandler,
  notFoundHandler,
} from './middlewares/errorMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const app = express();

app.engine('pug', pug.__express);
app.engine('ejs', ejs.renderFile);
app.set('views', path.join(projectRoot, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(projectRoot, 'public')));

app.use('/', rootRoutes);
app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
