import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/api/api";
import Cards from "../components/Cards";
import Form from "../components/Form";

class Home extends Component {
    state = {
        books: [],
        results: [],
        title: ""
    }

    componentDidMount() {
        API.getBooks()
            .then(res =>  {
                this.setState({ books: res.data });
                console.log('books:', this.state.books)
            })
            .catch(err => {
                throw err
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.title)
            .then(res => {
                this.setState({
                    results: res.data.items
                })
            })
            .catch(err => {
                throw err
            })
    }
    
    handleSaveBook = event => {
        event.preventDefault();

        const bookID = event.target.getAttribute('data-id')

        const newState = {...this.state}

        let targetBook = this.state.results.filter(book => book.id === bookID)

        const newBook = {
            title: targetBook[0].volumeInfo.title,
            authors: targetBook[0].volumeInfo.authors,
            description: targetBook[0].volumeInfo.description,
            image: targetBook[0].volumeInfo.imageLinks.thumbnail,
            link: targetBook[0].volumeInfo.infoLink
        }

        if (this.state.books[bookID]) {
            console.log(`Error, this book has been already saved!`)
            return

        } else {
            newState.books[bookID] = newBook
            
            this.setState(newState)
            console.log('This book is now saved:', this.state.books)

            API.saveBook({
                title: targetBook[0].volumeInfo.title,
                authors: targetBook[0].volumeInfo.authors,
                description: targetBook[0].volumeInfo.description,
                image: targetBook[0].volumeInfo.imageLinks.thumbnail,
                link: targetBook[0].volumeInfo.infoLink
            })

            console.log(newState.books)
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Jumbotron />
                <div className='container' style={{textAlign: 'center', color:'white'}}>
                    <Form
                    handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange = {this.handleInputChange} />
                    <div className='container-fluid' id='main-content'>
                        <br />
                    <div className="m-0 p-0"><strong>Search Results:</strong></div>

                        {this.state.results.map((book) => {
                            return (
                                <Cards
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    id={book.id}
                                    link={book.volumeInfo.infoLink}
                                    author={book.volumeInfo.authors}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    description={book.volumeInfo.description}
                                    saveBook={this.handleSaveBook}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
