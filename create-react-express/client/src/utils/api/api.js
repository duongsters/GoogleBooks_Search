
import axios from "axios";

export default {
    // Searches Google Books for books
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
    // Gets all books from the server side
    getBooks: function () {
        return axios.get("/api/books/");
    },
    // Gets the book with the unique book id to it
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books/", savedBooks);
    }
}

