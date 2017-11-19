const {
  div,
} = require('../lib/generators');

const root = {
  render: ({ count }) => div({},
    `Count: ${count}`
  ),
};

module.exports = root;
