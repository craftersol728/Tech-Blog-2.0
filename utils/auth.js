const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  //The code defines an express.js middleware function ifAuth. ir checks if the req has a property of the session.user.id if that is false send them back to the /login end point if it is true the middleware invokes the next() function The purpose of this middleware is to ensure that a user is authenticated (i.e., has a valid session) before accessing a protected resource.
  module.exports = withAuth;