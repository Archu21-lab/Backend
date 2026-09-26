import { Auth } from "../model/auth_model";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 15);
    const user = await Auth.create({ name, email, password: hashPassword });
    res.json({ status: true, message: "signup successfully !", user });
  } catch (err) {
    res.json({
      status: false,
      message: "signUp failed !",
      err: err.message,
    });
  }
};

export const signIn = async (res, req) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.finOne({ email });
    if (!user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json({ status: true, message: "signIn Successfully !", user });
      } else {
        res.json({ status: false, message: "password incorrect !" });
      }
    } else {
      res.json({ status: false, message: "account not exist, signup first !" });
    }
    res.json({ status: true, message: "signIn successfully !" });
  } catch (err) {
    res.json({
      status: true,
      message: "signIn Failed !",
      err: err.message,
    });
  }
};
