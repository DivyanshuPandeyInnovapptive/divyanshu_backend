const Book = require("../models/Book");

const getBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (err) {
    throw new Error("Cannot get books: " + err);
  }
};

const getBookById = async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (err) {
    throw new Error("Cannot get books: " + err);
  }
};

const addBook = async (book) => {
  console.log(book);
  try {
    await Book.create(book);
  } catch (err) {
    throw new Error("Cannot add book: " + err);
  }
};

const addBooks = async (books) => {
  try {
    const bks = [];
    console.log("Before: ", books);
    for (const book of books) {
      bks.push(addBook(book));
    }
    return bks;
  } catch (err) {
    throw new Error("Cannot add books: " + err);
  }
};

const updateBook = async (id, book) => {
  try {
    await Book.findByIdAndUpdate(id, { $set: book }, { new: true });
  } catch (err) {
    throw new Error("Cannot update book: " + err);
  }
};

const deleteBook = async (id) => {
  try {
    await Book.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Cannot delete book: " + err);
  }
};

module.exports = { getBooks, getBookById, addBooks, updateBook, deleteBook };
