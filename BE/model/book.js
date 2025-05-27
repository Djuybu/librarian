class Book {
    constructor(id, book_name, author, description, num_of_copies, date_created = new Date()) {
        this.id = id;
        this.book_name = book_name;
        this.author = author;
        this.description = description;
        this.num_of_copies = num_of_copies;
        this.date_created = date_created;
    }
}
