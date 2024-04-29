import Book from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  console.log(req.file);
  const book = new Book({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.path,
    genre: req.body.genre,
    type: req.body.type,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksByCategory = async (req, res) => {
  const category = req.query.category;
  try {
    const books = await Book.find().where("category").equals(category);
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
