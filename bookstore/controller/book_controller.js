import { Book } from "../model/book_model";

//controller is one type of function where specified process to handle request

export const insertBook = async (req, res) => {
  try {
    
    res.json({
      data:req.body,
      message: "book inserted succesfuly !",
    });
  } catch (err) {
    res.status(500).json({
      message: "book insertion failed !",
      error: err.message,
    });
  }
};

// req- user => send
// 1 query parameter 2-4 value send krni hain tab use how to use? => req.query
//2 params = singke value send krni hain tab => req.params
//3 body = multiple value send krni hain tab => req.body
