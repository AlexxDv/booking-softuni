module.exports =
  (...excludetKeys) =>
  (req, res, next) => {
    if (req.body) {
      for (let key in req.body) {
        if (excludetKeys.includes(key) == false) {
          req.body[key] = req.body[key].trim();
        }
      }
    }
    next();
  };
