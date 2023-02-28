const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    trim: true,
    required: [true, "A book name must be provided"],
    unique: true,
    maxlength: [50, "Book name must be at max 50 characters"],
  },
  authorName: {
    type: String,
    trim: true,
    required: [true, "Author name must be provided"],
    maxlength: [50, "Author name must be at max 50 characters"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  price: {
    sub_user: {
      type: Number,
      validate: {
        validator: (val) => {
          return val >= 0;
        },
        message: "Price cannot be negative",
      },
    },
    non_sub_user: {
      type: Number,
      validate: {
        validator: (val) => {
          return val >= 0;
        },
        message: "Price cannot be negative",
      },
    },
  },
});

bookSchema.index({ bookName: 1, authorName: 1 });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
