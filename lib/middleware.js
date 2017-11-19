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
        <script src="eyefraem-listeners.js"></script>
      </body>
    </html>
  `;
}

let state;

function middleware(components, { actions, initialState, root }) {
  return (request, response, next) => {
    if (!state) {
      state = initialState;
    }

    if (request.path === '/eyefraem-style.css') {
      return response.sendFile('public/eyefraem-style.css', { root: __dirname });
    } else if (request.path === '/eyefraem-resize.js') {
      return response.sendFile('public/eyefraem-resize.js', { root: __dirname });
    } else if (request.path === '/eyefraem-listeners.js') {
      return response.sendFile('public/eyefraem-listeners.js', { root: __dirname });
    } else if (request.method === 'POST' && request.path === '/eyefraem-action') {
      const { action } = request.query;
      state = actions[action](state);
      return response.end();
    }

    const keys = Object.keys(components);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const { cssFiles = [], render, title = '' } = components[key];
      if (request.path === `/${key}`) {
        return response.send(wrapHtml(render(JSON.parse(request.query.props)), title, cssFiles));
      } else if (request.path === '/' && root === key) {
        return response.send(wrapHtml(render(state), title, cssFiles));
      }
    }
    next();
  }
}

module.exports = middleware;
