const { h1 } = require('../lib/generators');

const title = {
  render: ({ title }) => h1(`Title: ${title}`),
};

module.exports = title;
