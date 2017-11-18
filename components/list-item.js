const {
  div,
  Component,
} = require('../lib/generators');

const listItem = {
  cssFiles: ['index.css'],
  render: ({ title, description }) => div(
    { className: 'list-item' },
    Component('title', { title }),
    Component('description', { description })
  ),
};

module.exports = listItem;
