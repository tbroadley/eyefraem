function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
 }

function createHtmlTagGenerator(tagName) {
  return (...children) => `<${tagName}>${children.join('')}</${tagName}>`;
}

module.exports = {
  div: createHtmlTagGenerator('div'),
  h1: createHtmlTagGenerator('h1'),
  p: createHtmlTagGenerator('p'),
  Component: (componentName, props) => {
    return `<iframe src="/${componentName}?props=${escapeHtml(JSON.stringify(props))}"></iframe>`;
  },
};
