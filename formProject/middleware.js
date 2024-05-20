const trim = (req, res, next) => {
  req.body.firstName.trim();
  req.body.lastName.trim();
  req.body.phoneNumber.trim();
  console.log("trimmed!");
  next();
};

const max = (req, res, next) => {
  if (
    req.body.firstName.toString().length > 25 ||
    req.body.lastName.toString().length > 25
  ) {
    res.locals.errorMessages.push("Too long");
  }
  next();
};

module.exports = { trim, max };
