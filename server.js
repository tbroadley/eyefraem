const express = require('express');

const middleware = require('./lib/middleware');

const root = require('./components/root');
const listItem = require('./components/list-item');
const title = require('./components/title');
const description = require('./components/description');

const app = express();

const components = {
  root,
  listItem,
  title,
  description,
};

app.use(middleware(components))

const defaultProps = {
  items: [
    {
      title: 'First item',
      description: '',
    },
    {
      title: 'Second item',
      description: 'I love eyefraem',
    },
  ],
};

app.get('/', (request, response) => response.redirect(`/root?props=${JSON.stringify(defaultProps)}`));

app.listen(3000);
