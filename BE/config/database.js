import mysql from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: "root",
    password: '',
    database: "book_admin",
    port: process.env.DB_PORT || 3306
}).promise();

export default db;