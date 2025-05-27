import React from "react";
import { useParams } from "react-router-dom";
import axiosFetch from "../helper/axios.js";
import Header from "../component/Header.jsx";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
    const {id} = useParams();
    const [bookDetails, setBookDetails] = React.useState(null);
    useEffect(() => {
        const fetchBookDetails = async () => {
            if (!id) {
                console.error("No book ID provided for fetching details");
                return;
            }
            try {
                const response = await axiosFetch({
                    url: `books/${id}`,
                    method: 'GET',
                });
                if (response.status === 200 || response.status === 201) {
                    setBookDetails(response.data);
                } else {
                    console.error("Failed to fetch book details:", response.data);
                }
            } catch (error) {
                console.error("Failed to fetch book details:", error);
            }
        };
        fetchBookDetails();
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axiosFetch({
                url: id ? `books/${id}` : 'books',
                method: id ? 'PUT' : 'POST',
                data: {
                    book_name: data.book_name,
                    author: data.author,
                    num_of_copies: data.num_of_copies,
                    description: data.description,
                },
            });
            if (response.status === 201 || response.status === 200) {
                // Redirect or update state to reflect the changes
                window.location.href = `/`;
            } else {
                console.error("Failed to update book:", response.data);
            }
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    return (
    <>
        <Header />
        <div className="w-fit mx-auto py-2 text-4xl">{id? "Update book": "Add book"}</div>
        <div className="w-9/12 mx-auto">
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Book Name</label>
                    <input
                        type="text"
                        {...register("book_name")}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter book name"
                        defaultValue={bookDetails ? bookDetails.book_name : ""}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        {...register("author")}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter author name"
                        defaultValue={bookDetails ? bookDetails.author : ""}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Copies</label>
                    <input
                        type="number"
                        {...register("num_of_copies")}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter number of copies"
                        defaultValue={bookDetails ? bookDetails.num_of_copies : ""}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register("description")}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter book description"
                        defaultValue={bookDetails ? bookDetails.description : ""}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
                >
                    Add Book
                </button>
            </form>
        </div>
    </>)
}   

export default AddBook;