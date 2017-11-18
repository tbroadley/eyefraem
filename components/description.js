const { p } = require('../lib/generators');

const description = {
  cssFiles: ['index.css', 'description.css'],
  render: ({ description }) => (description ? p({ className: 'description' }, `Description: ${description}`) : '')
};

module.exports = description;
