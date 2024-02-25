import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // more secure,mitigate XSS (cross site scripting) prevents JavaScript access to the cookie
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days value in milli-seconds
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
  });

  return token;
};

export default generateTokenAndSetCookie;
