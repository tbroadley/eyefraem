const {
  div,
  Component,
} = require('../lib/generators');

const listItem = {
  render: ({ title, description }) => div(
    Component('title', { title }),
    Component('description', { description })
  ),
};

module.exports = listItem;
