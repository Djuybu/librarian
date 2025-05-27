CREATE DATABASE book_admin
USE book_admin

CREATE TABLE book (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    book_name VARCHAR(90),
    author VARCHAR(60),
    description TEXT,
    num_of_copies INT,
    date_created DATETIME DEFAULT NOW()
);

INSERT INTO book (id, book_name, author, description, num_of_copies)
VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', 'A novel about racial injustice.', 5),
(2, '1984', 'George Orwell', 'A dystopian novel about surveillance.', 4),
(3, 'Pride and Prejudice', 'Jane Austen', 'A romantic novel.', 6),
(4, 'The Great Gatsby', 'F. Scott Fitzgerald', 'The American dream in the 1920s.', 3),
(5, 'Moby Dick', 'Herman Melville', 'A quest for a white whale.', 2),
(6, 'War and Peace', 'Leo Tolstoy', 'Historical fiction set in Napoleonic era.', 4),
(7, 'The Catcher in the Rye', 'J.D. Salinger', 'A young man’s alienation.', 5),
(8, 'The Hobbit', 'J.R.R. Tolkien', 'A fantasy adventure.', 7),
(9, 'Fahrenheit 451', 'Ray Bradbury', 'A world where books are banned.', 4),
(10, 'Jane Eyre', 'Charlotte Brontë', 'A story of resilience and independence.', 3),
(11, 'Animal Farm', 'George Orwell', 'Political allegory with animals.', 5),
(12, 'Wuthering Heights', 'Emily Brontë', 'Dark romance and revenge.', 2),
(13, 'The Odyssey', 'Homer', 'An epic journey home.', 3),
(14, 'Crime and Punishment', 'Fyodor Dostoevsky', 'Murder and guilt.', 4),
(15, 'Brave New World', 'Aldous Huxley', 'A dystopian future of control.', 3),
(16, 'The Lord of the Rings', 'J.R.R. Tolkien', 'A battle of good vs evil.', 6),
(17, 'The Alchemist', 'Paulo Coelho', 'Following your dreams.', 8),
(18, 'Dracula', 'Bram Stoker', 'The original vampire tale.', 3),
(19, 'The Book Thief', 'Markus Zusak', 'A story set in Nazi Germany.', 5),
(20, 'Les Misérables', 'Victor Hugo', 'Redemption and revolution.', 4);
