function wrapHtml(body, title, cssFiles) {
  return `
    <html>
      <head>
        ${title ? `<title>${title}</title>` : ''}
        <link rel="stylesheet" href="eyefraem-style.css">
        ${
          cssFiles.map(cssFile => `<link rel="stylesheet" href=${cssFile}>`).join('\n')
        }
      </head>
      <body>
        ${body}
        <script src="eyefraem-resize.js"></script>
      </body>
    </html>
  `;
}

function middleware(components, { defaultProps, root }) {
  return (request, response, next) => {
    if (request.path === '/eyefraem-style.css') {
      return response.sendFile('public/eyefraem-style.css', { root: __dirname });
    } else if (request.path === '/eyefraem-resize.js') {
      return response.sendFile('public/eyefraem-resize.js', { root: __dirname });
    }

    const keys = Object.keys(components);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const { cssFiles = [], render, title = '' } = components[key];
      if (request.path === `/${key}`) {
        return response.send(wrapHtml(render(JSON.parse(request.query.props)), title, cssFiles));
      } else if (request.path === '/' && root === key) {
        return response.send(wrapHtml(render(defaultProps), title, cssFiles));
      }
    }
    next();
  }
}

module.exports = middleware;
