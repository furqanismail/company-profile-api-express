const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const homeRouter = require('./routes/app');

const heroRouter = require('./routes/hero');
const visiRouter = require('./routes/visi');
const misiRouter = require('./routes/misi');
const serviceRouter = require('./routes/service');
const categoryPortofolioRouter = require('./routes/category_portofolio');
const portofolioRouter = require('./routes/portofolio');
const teamRouter = require('./routes/team');
const categoryArticleRouter = require('./routes/category_article');
const articleRouter = require('./routes/article');
const contactRouter = require('./routes/contact');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', homeRouter);

app.use('/hero', heroRouter);
app.use('/visi', visiRouter);
app.use('/misi', misiRouter);
app.use('/service', serviceRouter);
app.use('/category-portofolio', categoryPortofolioRouter);
app.use('/portofolio', portofolioRouter);
app.use('/team', teamRouter);
app.use('/category-article', categoryArticleRouter);
app.use('/article', articleRouter);
app.use('/contact', contactRouter);

module.exports = app;
