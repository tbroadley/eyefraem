const { h1 } = require('../lib/generators');

const title = {
  cssFiles: ['index.css'],
  render: ({ title }) => h1({ className: 'title' }, `Title: ${title}`),
};

module.exports = title;
