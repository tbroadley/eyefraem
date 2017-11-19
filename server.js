const express = require('express');

const middleware = require('./lib/middleware');

const count = require('./components/count');
const incrementButton = require('./components/increment-button');
const root = require('./components/root');

const app = express();

const components = {
  count,
  incrementButton,
  root,
};

app.use(express.static('public'));

app.use(middleware(components, {
  actions: {
    'increment': ({ count }) => ({ count: count + 1 }),
  },
  initialState: {
    count: 0,
  },
  root: 'root'
}));

app.listen(3000);
