const {
  div,
  Component,
} = require('../lib/generators');

const root = {
  render: ({ items }) => div(
    items.map(item => Component('listItem', item))
  ),
};

module.exports = root;
