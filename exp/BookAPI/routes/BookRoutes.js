const express = require("express");
const routing = express.Router();
const bookControllers = require("../controllers/BookControllers");

routing.get("/", async (req, res) => {
  try {
    const books = await bookControllers.getBooks();
    res.status(200).json({
      result: "success",
      length: books.length,
      data: {
        message: "Books fetched successfully",
        books,
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error fetching books",
        err,
      },
    });
  }
});

routing.post("/", async (req, res) => {
  try {
    console.log(req.body.books);
    await bookControllers.addBooks(req.body.books);
    res.status(200).json({
      result: "success",
      data: {
        message: "Books added successfully",
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error adding books",
        err,
      },
    });
  }
});

routing.get("/:id", async (req, res) => {
  try {
    const book = await bookControllers.getBookById(req.params.id);
    res.status(200).json({
      result: "success",
      data: {
        message: "Book fetched successfully",
        book,
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error fetching book with id: " + req.params.id,
        err,
      },
    });
  }
});

routing.patch("/:id", async (req, res) => {
  try {
    req.body.updated_at = new Date();
    await bookControllers.updateBook(req.params.id, req.body);
    res.status(200).json({
      result: "success",
      data: {
        message: "Book updated successfully",
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error updating book with id: " + req.params.id,
        err,
      },
    });
  }
});

routing.delete("/:id", async (req, res) => {
  try {
    await bookControllers.deleteBook(req.params.id);
    res.status(200).json({
      result: "success",
      data: {
        message: "Book deleted successfully",
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error deleting book with id: " + req.params.id,
        err,
      },
    });
  }
});

module.exports = routing;
