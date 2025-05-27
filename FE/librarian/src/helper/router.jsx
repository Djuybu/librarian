// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import BookDetails from "../page/BookDetails.jsx";
import AddBook from "../page/AddBook.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/books/:id",
    element: <BookDetails />,
  },
  {
    path: "/book/add-new",
    element: <AddBook />,
  },
  {
    path: "/book/edit/:id",
    element: <AddBook />,
  },
]);
