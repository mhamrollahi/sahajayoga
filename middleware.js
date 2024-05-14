const loggerMiddleware = (req, res, next) => {
  console.log(`request with path : ${req.path} and method:${req.method}`);
  next();
};

export default loggerMiddleware;
