function wrapHtml(body, title) {
  return `
    <html>
      <head>
        ${title ? `<title>${title}</title>` : ''}
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}

function middleware(components, { defaultProps, root }) {
  return (request, response, next) => {
    const keys = Object.keys(components);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const { render, title } = components[key];
      if (request.path === `/${key}`) {
        return response.send(wrapHtml(render(JSON.parse(request.query.props))));
      } else if (request.path === '/' && root === key) {
        return response.send(wrapHtml(render(defaultProps), title));
      }
    }
    next();
  }
}

module.exports = middleware;
