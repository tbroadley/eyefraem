const {
  button,
} = require('../lib/generators');

const incrementButton = {
  render: () => button(
    { click: 'increment' },
    'Increment'
  ),
};

module.exports = incrementButton;
