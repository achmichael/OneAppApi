import { ResponseError } from "../Config/error.js";
import jwt from "jsonwebtoken";
export function accessValidation(req, res, next){
    const {authorization} = req.headers;
    if(!authorization){
        return next(new ResponseError(401, "Token Is Required"));
    }
    const token = authorization.split(" ")[1];
    const secret = process.env.JWT_SECRET;
    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }catch(error){
        if (error.name === 'TokenExpiredError') {
            return next(new ResponseError(500, "Token Is Expired"));
        } else if (error.name === 'JsonWebTokenError') {
            return next(new ResponseError(401, "Invalid Token"));
        } else {
            return next(new ResponseError(500, "Token Verification Failed"));
        }
    }
}