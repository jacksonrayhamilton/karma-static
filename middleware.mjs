import serveStatic from 'serve-static';

export default function karmaStatic (config) {
  config.static = config.static || {};
  var path = config.static.path;
  if (!path) {
    return function (req, res, next) {
      next();
    };
  }
  return serveStatic(path);
}
