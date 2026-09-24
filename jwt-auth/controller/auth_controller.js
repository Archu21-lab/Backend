import { Auth } from "../model/auth_model";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const {name ,email,password} = req.body;
    const hashPassword = bcrypt.hash(password)
    await Auth.create(user);
    res.json({ status: true, message: "signup successfully !" });
  } catch (err) {
    res.json({
      status: false,
      message: "signUp failed !",
      err: err.message,
    });
  }
};

const signIn = async (res, req) => {
  try {
    res.json({ status: true, message: "signIn successfully !" });
  } catch (err) {
    res.json({
      status: true,
      message: "signIn Failed !",
      err: err.message,
    });
  }
};
