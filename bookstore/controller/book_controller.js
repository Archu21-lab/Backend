import { Book } from "../model/book_model";

//controller is one type of function where specified process to handle request

export const insertBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json({
      status: true,
      data: req.body,
      message: "book inserted succesfuly !",
      book,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "book insertion failed !",
      error: err.message,
    });
  }
};

// req- user => send
// 1 query parameter 2-4 value send krni hain tab use how to use? => req.query
//2 params = singke value send krni hain tab => req.params
//3 body = multiple value send krni hain tab => req.body

export const fetchBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({
      status: true,
      message: "book Fetched Successfully !",
      books,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "book fetched failed !",
      err: err.message,
    });
  }
};

export const removeBook = async (res, req) => {
  try {
    const id = req.params.id;
    const books = await Book.findByIdAndDelete(id);
    res.json({
      status: true,
      message: "book deleted successfully !",
      books,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "book deletion failed !",
      err: err.message,
    });
  }
};

export const updateBook = async (res, req) => {
  try {
    const data = req.body;
    const book = await Book.findByIdAndUpdate(data.id, { $set: data });
    res.json({
      status: true,
      message: "book updated successfully !",
      book,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "book updation failed !",
      err: err.message,
    });
  }
};
