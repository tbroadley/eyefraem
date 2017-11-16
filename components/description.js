const { p } = require('../lib/generators');

const description = {
  render: ({ description }) => (description ? p(`Description: ${description}`) : '')
};

module.exports = description;
