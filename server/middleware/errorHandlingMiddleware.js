const errorHandlingMiddleware = (error, req, res, next) => {
  console.log("Test in Middleware Error Handling ...??",error.message);
  // res.render("../views/errors/500", { errorMessage: error.message });
  res.end();
};

export default errorHandlingMiddleware;
