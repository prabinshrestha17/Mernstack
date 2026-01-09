import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

export const generateToken = async ({ payload, expiryTime }) => {
  const result = await jwt.sign(payload, SECRET_KEY, { expiresIn: expiryTime });
  return result;
};

export const verifyToken = async (token) => {
  const result = await jwt.verify(token, SECRET_KEY);
  // Expiry time exceed garnu bhayena , token generate garney secret key rw verify garney secret key eutei huna paryo
  return result;
};
