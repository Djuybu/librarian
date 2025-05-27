import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import axiosFetch from './helper/axios'
import { useEffect } from 'react'
import { Link } from 'react-router'
const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosFetch({
          url: 'books',
          method: 'GET',
        })
        console.log(response.data)
        setBooks(response.data)
      } catch (error) {
        console.error("Failed to fetch books:", error)
      }
    }

    fetchBooks()
  }, [])

  const deleteBook = async (id) => {
    if (!id) {
      console.error("No book ID provided for deletion")
      return
    }
    try {
      const response = await axiosFetch({
        url: `books/${id}`,
        method: 'DELETE',
      })
      if (response.status === 204) {
        setBooks(books.filter(book => book.id !== id))
      } else {
        console.error("Failed to delete book:", response.data)
      }
    } catch (error) {
      console.error("Error deleting book:", error)
    }
  }

  const displayBookDetails = (id) => {
    if (!id) {
      console.error("No book ID provided for details")
      return
    }
    // Navigate to book details page (assuming you have a router set up)
    window.location.href = `/books/${id}`
  }


  return (
    <>
      <Header />
      <div className="w-fit mx-auto py-2 text-4xl">All books</div>
      <Link
      to="/book/add-new"
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mr-4 rounded shadow"
    >Add book</Link>
      <table className="w-9/12 mx-auto table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Number of copies</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="text-center">
              <td className="border px-4 py-2">{book.book_name}</td>
              <td className="border px-4 py-2">{book.num_of_copies}</td>
              <td className="border px-4 py-2 space-x-2">
                <button onClick={() => {displayBookDetails(book.id)}}>Details</button>
                <button onClick={() => {deleteBook(book.id)}}>Delete</button>
                <Link to={`/book/edit/${book.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
