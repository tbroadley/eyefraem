const {
  div,
  Component,
} = require('../lib/generators');

const root = {
  render: ({ items }) => div(
    { id: 'root' },
    items.map(item => Component('listItem', item))
  ),
  title: 'This is eyefraem',
};

module.exports = root;
