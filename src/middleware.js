export const localsMiddleware = (req, res, next) => {
  res.local.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Lemtube";
  res.locals.loggedInUser = req.session.user;
  next();
};
