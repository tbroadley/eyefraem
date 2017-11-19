const {
  button,
  Component,
  div,
} = require('../lib/generators');

const root = {
  render: ({ count }) => div(
    { id: 'root' },
    Component('count', { count }),
    Component('incrementButton', {})
  ),
  title: 'This is eyefraem',
};

module.exports = root;
