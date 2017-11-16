function middleware(components) {
  return (request, response, next) => {
    const keys = Object.keys(components);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      if (request.path === `/${key}`) {
        return response.send(components[key].render(JSON.parse(request.query.props)));
      }
    }
    next();
  }
}

module.exports = middleware;
