function middleware(components, { defaultProps, root }) {
  return (request, response, next) => {
    const keys = Object.keys(components);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      if (request.path === `/${key}`) {
        return response.send(components[key].render(JSON.parse(request.query.props)));
      } else if (request.path === '/' && root === key) {
        return response.send(components[key].render(defaultProps));
      }
    }
    next();
  }
}

module.exports = middleware;
