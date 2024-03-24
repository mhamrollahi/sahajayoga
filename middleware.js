const loggerMiddleware = (req, res, next) => {
  console.log(`request with path : ${req.path} and method:${req.method}`);
  // const r = Math.random()
  // console.log(r)
  // if(r < 0.5){
  //   return res.status(403).send({
  //     success : false,
  //     message : "شما دسترسی ندارید ..!",
  //   });
  // }
  next();
};

export default loggerMiddleware;
