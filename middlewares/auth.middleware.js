import { User } from "../models/user.model.js";
import { catchAsyncErrors } from "./catchAsynncError.middleware.js";
import ErrorHandler from "./error.middleware.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies; 
  console.log(token)
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});
