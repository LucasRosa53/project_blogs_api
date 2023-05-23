const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userInfoRouter = require('./routes/userInfoRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const blogPostRouter = require('./routes/blogPostRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userInfoRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
