import React from "react";
import { use } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header.jsx";
import axiosFetch from "../helper/axios.js";
import { useEffect } from "react";

const BookDetails = () => {
    const deleteBook = async (id) => {
        if (!id) {
            console.error("No book ID provided for deletion");
            return;
        }
        try {
            const response = await axiosFetch({
                url: `books/${id}`,
                method: 'DELETE',
            });
            if (response.status === 204) {
                // Redirect or update state to remove the book from the list
                window.location.href = '/';
            } else {
                console.error("Failed to delete book:", response.data);
            }
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }
    const { id } = useParams();
    const [BookDetails, setBookDetails] = React.useState(null);
    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axiosFetch({
                    url: `books/${id}`,
                    method: 'GET',
                });
                setBookDetails(response.data);
            } catch (error) {
                console.error("Failed to fetch book details:", error);
            }
        };

        fetchBookDetails();
    }, [id]);
    return(<>
        <Header />
        <div className="w-fit mx-auto py-2 text-4xl">Book Details</div>
        {BookDetails ? (
            (<>
            <div className="w-9/12 mx-auto">
                <h2 className="text-2xl font-bold">{BookDetails.name}</h2>
                <p><strong>Author:</strong> {BookDetails.author}</p>
                <p><strong>Number of Copies:</strong> {BookDetails.num_of_copies}</p>
                <p><strong>Description:</strong> {BookDetails.description}</p>
                <div className="flex gap-4 mt-5">
                <Link
                    to={`/book/edit/${BookDetails.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
                >
                    Edit
                </Link>
                <button onClick={() => deleteBook(BookDetails.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
                >
                    Delete
                </button>
                </div>
            </div>
            </>
            )
        ) : (
            <div className="w-9/12 mx-auto text-center">Loading book details...</div>
        )}
    </>)
}

export default BookDetails;