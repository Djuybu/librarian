import { Router } from "express";
import { addBook, getAllBooks, getBookById, updateBook, deleteBook } from "../service/BookService.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.route("/:id")
    .get(async (req, res) => {
        const bookId = req.params.id;
        try {
            const book = await getBookById(bookId);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (error) {
            console.error("Error fetching book by ID:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    })
    .put(async (req, res) => {
        const bookId = req.params.id;
        const book = req.body; // Assuming book is sent in the request body
        try {
            const updated = await updateBook(bookId, book);
            if (updated) {
                res.status(200).json({ message: "Book updated successfully" });
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (error) {
            console.error("Error updating book:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    })
    .delete(async (req, res) => {
        const bookId = req.params.id;
        try {
            const deleted = await deleteBook(bookId);
            if (deleted) {
                res.status(204).send(); // No content
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (error) {
            console.error("Error deleting book:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

router.post("/", async (req, res) => {
    const book = req.body; // Assuming book is sent in the request body
    try {
        const newBookId = await addBook(book);
        res.status(201).json({ id: newBookId });
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;