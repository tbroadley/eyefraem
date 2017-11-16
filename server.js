const express = require('express');

const app = express();

const {
  div,
  h1,
  p,
  Component,
} = require('./lib/generators');
const middleware = require('./lib/middleware');

const components = {
  root: ({ items }) => div(
    items.map(item => Component('listItem', item))
  ),
  listItem: ({ title, description }) => div(
    Component('title', title),
    Component('description', description)
  ),
  title: title => h1(`Title: ${title}`),
  description: description => (description ? p(`Description: ${description}`) : '')
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
