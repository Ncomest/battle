const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "battle-arena";

export const verifyUsers = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).send("No token provided");

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
