import db from "../config/database.js";

const getAllBooks = async () => {
    try {
        const [rows] = await db.query("SELECT id, book_name, num_of_copies FROM book");
        console.log("Fetched books:", rows);
        return rows;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

const getBookById = async (id) => {
    try {
        const [rows] = await db.query("SELECT * FROM book WHERE id = ?", [id]);
        return rows[0];
    } catch (error) {
        console.error("Error fetching book by ID:", error);
        throw error;
    }
}

const addBook = async (book) => {
    // book comes from the model Book
    try {
        const { book_name, author, description, num_of_copies } = book;
        const [result] = await db.query(
            "INSERT INTO book (book_name, author, description, num_of_copies) VALUES (?, ?, ?, ?)",
            [book_name, author, description, num_of_copies]
        );
        return result.insertId; // Return the ID of the newly inserted book
    } catch (error) {
        console.error("Error adding book:", error);
        throw error;
    }
}

const updateBook = async (id, book) => {
    try {
        const { book_name, author, description, num_of_copies } = book;
        const [result] = await db.query(
            "UPDATE book SET book_name = ?, author = ?, description = ?, num_of_copies = ? WHERE id = ?",
            [book_name, author, description, num_of_copies, id]
        );
        return result.affectedRows > 0; // Return true if the update was successful
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
}

const deleteBook = async (id) => {
    try {
        const [result] = await db.query("DELETE FROM book WHERE id = ?", [id]);
        return result.affectedRows > 0; // Return true if the deletion was successful
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
}

export {addBook, getAllBooks, getBookById, updateBook, deleteBook}; 